import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Header from 'components/Common/Header'
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
      <Header author={author}></Header>

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
