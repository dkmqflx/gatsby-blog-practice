import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import queryString, { ParsedQuery } from 'query-string'
import { PostListItemType } from 'types/PostItem.types'
import { IndexPagePropsType } from 'types/MainPage.types'
import Main from 'components/Layout/Main'
import Introduction from 'components/Main/Introduction'
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'
import Template from 'components/Common/Template'

const IndexPage = ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl, author, introduction },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}: IndexPagePropsType) => {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <Main>
      <Introduction
        profileImage={gatsbyImageData}
        author={author}
        introduction={introduction}
      />

      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />

      <Template
        title={title}
        description={description}
        url={siteUrl}
        image={publicURL}
      >
        <PostList selectedCategory={selectedCategory} posts={edges} />
      </Template>
    </Main>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
        introduction
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`
