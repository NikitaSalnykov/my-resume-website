import { Container, Section, Title } from 'components/Resume.styled'
import React, { useState } from 'react'

export const AboutMe = () => {
  const [readMore, setReadMore] = useState(false)

  const bio = (
    `I am a Junior Frontend Developer with a passion for creating interactive and modern web applications. I know HTML, CSS, JavaScript, and have experience with React. My goal is to keep improving my web development skills and design attractive user interfaces. I can adapt easily to different tasks and enjoy collaborating with experts, learning from them, and contributing to the team effectively. I'm excited to take on interesting projects and bring value to the development team. Always curious and eager to learn new things`
  )
  
  const shortBio = (
      <p>{bio.split(' ').slice(0, 55).join(' ')} <span style={{cursor: "pointer"}} onClick={() => setReadMore(true)}><b> ...Read more</b></span></p>
  )

  return (
    <Section>
      <Container>
         <Title>About me</Title>
        {!readMore ? shortBio : <p>{bio}</p>}
      </Container>
    </Section>
  )
}
