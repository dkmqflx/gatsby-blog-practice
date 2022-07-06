import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import useTheme from 'hooks/useTheme'

const HeaderWrapper = styled.header`
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
`

type HeaderPropsType = {
  author: string
}

const Header = ({ author }: HeaderPropsType) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>{author}</h1>
      </Link>
      {theme ? (
        <button onClick={() => toggleTheme()}>To Light</button>
      ) : (
        <button onClick={() => toggleTheme()}>To Dark</button>
      )}
    </HeaderWrapper>
  )
}

export default Header
