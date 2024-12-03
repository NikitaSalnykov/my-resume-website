import { Container, Section, Title } from 'components/Resume.styled'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {
  const [readMore, setReadMore] = useState(false)
  const { t } = useTranslation();

  
  const shortBio = (
      <p>{t('bio').split(' ').slice(0, 55).join(' ')} <span style={{cursor: "pointer"}} onClick={() => setReadMore(true)}><b> ...Read more</b></span></p>
  )

  return (
    <Section>
      <Container>
         <Title>{t('about-me')}</Title>
        {!readMore ? shortBio : <p>{t('bio')}</p>}
      </Container>
    </Section>
  )
}
