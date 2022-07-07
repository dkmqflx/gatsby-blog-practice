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
  console.log({ theme })
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>{author}</h1>
      </Link>
      {theme === 'theme-dark' ? (
        <button onClick={() => toggleTheme('theme-light')}>To Light</button>
      ) : (
        <button onClick={() => toggleTheme('theme-dark')}>To Dark</button>
      )}
    </HeaderWrapper>
  )
}

export default Header
