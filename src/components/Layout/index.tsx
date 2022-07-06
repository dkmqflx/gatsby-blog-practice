import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from 'components/Common/Header'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 768px;
  width: 768px;
  padding: 28px;
`

const Layout = ({ children }: { children: ReactNode }) => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `,
  )

  return (
    <>
      <Wrapper>
        <Header author={author}></Header>
        {children}
      </Wrapper>
    </>
  )
}

export default Layout
