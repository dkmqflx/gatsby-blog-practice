import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  color: #222222;
  max-width: 768px;
  margin: 0 auto;
`

const UserLink = styled.a`
  text-decoration: underline;
  text-underline-position: under;
`

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Wrapper>
      <ProfileImage profileImage={profileImage} />

      <div>
        <div>
          <span>Personal blog by </span>
          <UserLink href="/">"User Name"</UserLink>
        </div>
        <p>I'm Junior Frontend Developer.</p>
      </div>
    </Wrapper>
  )
}

export default Introduction
