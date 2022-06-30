import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const HeaderWrapper = styled.header`
  margin-bottom: 28px;
`

const Header = ({ author }: { author: string }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>{author}</h1>
      </Link>
    </HeaderWrapper>
  )
}

export default Header
