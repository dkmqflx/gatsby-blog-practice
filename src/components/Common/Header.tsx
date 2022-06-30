import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const HeaderWrapper = styled.header`
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
`

const Header = ({ author }: { author: string }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>{author}</h1>
      </Link>
      <button>mode</button>
    </HeaderWrapper>
  )
}

export default Header
