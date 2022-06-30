import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import ProfileImage from 'components/Main/ProfileImage'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;
  word-break: break-word;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
`

const SocalLink = styled(Link)`
  font-weight: bold;

  &:not(:first-of-type) {
    margin-left: 4px;
  }
`

type IntroductionProps = {
  profileImage: IGatsbyImageData
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

const Introduction = ({
  profileImage,
  author,
  introduction,
  social,
}: IntroductionProps) => {
  return (
    <Wrapper>
      <Profile>
        <ProfileImage profileImage={profileImage} />

        <div>
          <span>Written by {author}</span>
          <p>{introduction}</p>
          {Object.entries(social).map(
            ([key, value]) =>
              value && (
                <SocalLink key={key} to={value}>
                  {key}
                </SocalLink>
              ),
          )}
        </div>
      </Profile>
    </Wrapper>
  )
}

export default Introduction
