import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

type CategoryItemProps = {
  active: boolean
}

type CategoryListWrapperProps = {
  more: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const CategoryListWrapper = styled.ul<CategoryListWrapperProps>`
  display: flex;
  position: relative;
  margin-bottom: 24px;

  flex-wrap: wrap;
  overflow: hidden;
  height: 32px;
`
const Li = styled.li`
  list-style: none;

  margin-right: 10px;
  padding: 8px 0;
  font-size: 14px;
  color: #959595;

  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  font-weight: ${({ active }) => (active ? '800' : '400')};
`

const Icon = styled.span`
  position: absolute;
  right: 0;
  cursor: pointer;
  color: #959595;
  font-weight: bold;
  font-size: 18px;
`

const CategoryList = ({
  selectedCategory,
  categoryList,
}: CategoryListProps) => {
  const [more, setMore] = useState(false)
  const [visible, setVisible] = useState(false)
  const categoryRef: MutableRefObject<HTMLUListElement | null> =
    useRef<HTMLUListElement | null>(null)

  const toggle = useCallback(() => {
    setMore(more => !more)
    categoryRef.current!.style.height =
      categoryRef.current?.style.height === '32px'
        ? `${categoryRef.current.scrollHeight}px`
        : '32px'
  }, [])

  useEffect(() => {
    if (
      categoryRef.current &&
      categoryRef.current.clientHeight < categoryRef.current.scrollHeight
    ) {
      categoryRef.current.style.height = '32px'
      categoryRef.current.style.transition = 'all 0.3s linear'
      setVisible(true)
    }
  }, [])

  return (
    <CategoryListWrapper more={more} ref={categoryRef}>
      {Object.entries(categoryList).map(([name, count]) => (
        <Li>
          <CategoryItem
            to={`/?category=${name}`}
            active={name === selectedCategory}
            key={name}
          >
            #{name}({count})
          </CategoryItem>
        </Li>
      ))}

      {visible &&
        (more ? (
          <Icon onClick={toggle}>-</Icon>
        ) : (
          <Icon onClick={toggle}>+</Icon>
        ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
