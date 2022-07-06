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
  // const set = () => {
  //   localStorage.setItem('blog_theme', 'dark')
  //   console.log('dark')
  // }
  // const reset = () => {
  //   localStorage.setItem('blog_theme', 'light')
  //   console.log('light')
  // }
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>{author}</h1>
      </Link>
      {theme === 'dark' ? (
        <button onClick={() => toggleTheme('light')}>To Light</button>
      ) : (
        <button onClick={() => toggleTheme('dark')}>To Dark</button>
      )}
      {/* 
      <button onClick={() => set()}>To Light</button>

      <button onClick={() => reset()}>To Dark</button> */}
    </HeaderWrapper>
  )
}

export default Header
