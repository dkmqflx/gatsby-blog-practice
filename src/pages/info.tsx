import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import Text from 'components/Text'

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const info: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  Text
  return (
    <div>
      <Text text={title}></Text>
      <Text text={description}></Text>
      <Text text={author}></Text>
      <Link to="/">To Main</Link>
    </div>
  )
}

export default info

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
