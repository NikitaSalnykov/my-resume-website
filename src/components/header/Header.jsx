import { Container, Section } from 'components/Resume.styled'
import React from 'react'
import { HeaderContainer, Photo, Bio } from './Header.styled'

export const Header = () => {
  return (
    <Section>
      <Container>
        <HeaderContainer>
        <Photo>
          <img src={process.env.PUBLIC_URL + '/photo.jpg'} alt="photo" width={200}/>
          </Photo>
        <Bio>
          <h1>Salnykov Nikita</h1>
          <p>Junior front-end developer</p>
        </Bio>
      </HeaderContainer>
      </Container>
      </Section>
  )
}