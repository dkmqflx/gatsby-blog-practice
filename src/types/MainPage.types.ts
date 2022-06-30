import { IGatsbyImageData } from 'gatsby-plugin-image'
import { PostListItemType } from './PostItem.types'

export type IndexPagePropsType = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
        author: string
        introduction: string
        social: {
          github: string
          linkedin: string
          twitter: string
          facebook: string
          medium: string
          instagram: string
        }
      }
    }
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}
