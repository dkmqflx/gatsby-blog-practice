import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Toggle from './Toggle'

const HeaderWrapper = styled.header`
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
`

type HeaderPropsType = {
  author: string
}

const Header = ({ author }: HeaderPropsType) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>{author}</h1>
      </Link>
      <Toggle></Toggle>
    </HeaderWrapper>
  )
}

export default Header
