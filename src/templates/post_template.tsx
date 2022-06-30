import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostPageItemType } from 'types/PostItem.types' // 바로 아래에서 정의할 것입니다
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import Header from 'components/Common/Header'
import Layout from 'components/Layout'

type PostTemplateProps = {
  data: {
    site: {
      siteMetadata: { author: string }
    }
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}
const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    site: {
      siteMetadata: { author },
    },
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const [
    {
      node: {
        html,
        frontmatter: {
          title,
          summary,
          date,
          categories,
          thumbnail: {
            childImageSharp: { gatsbyImageData },
            publicURL,
          },
        },
      },
    },
  ] = edges

  return (
    <Layout>
      <Template
        title={title}
        description={summary}
        url={href}
        image={publicURL}
      >
        <Header author={author}></Header>
        <PostHead
          title={title}
          date={date}
          categories={categories}
          thumbnail={gatsbyImageData}
        />
        <PostContent html={html} />
        <CommentWidget />
      </Template>
    </Layout>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    site {
      siteMetadata {
        author
      }
    }

    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
