import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 768px;
  width: 768px;
  padding: 28px;
`

const Layout = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout
