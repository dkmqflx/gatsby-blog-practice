import React from 'react'
import { Link } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'
import styled from '@emotion/styled'

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;
  word-break: break-word;
`

const HeaderLink = styled(Link)`
  margin-bottom: 28px;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
`

type IntroductionProps = {
  profileImage: IGatsbyImageData
  author: string
  introduction: string
}

const Introduction = ({
  profileImage,
  author,
  introduction,
}: IntroductionProps) => {
  return (
    <Wrapper>
      <HeaderLink to="/">
        <h1>{author}</h1>
      </HeaderLink>

      <Profile>
        <ProfileImage profileImage={profileImage} />

        <div>
          <span>Written by {author}</span>
          <p>{introduction}</p>
        </div>
      </Profile>
    </Wrapper>
  )
}

export default Introduction
