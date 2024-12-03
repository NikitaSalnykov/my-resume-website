import { Container, Section, Title } from 'components/Resume.styled'
import { ExperienceDetails, ExperienceDuration, ExperienceItem } from 'components/WorkExperience/WorkExperience.styled'
import React from 'react'
import { EducationList } from './Education.styled'
import { useTranslation } from 'react-i18next';

export const Education = ({data}) => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  return (
        <Section>
      <Container>
        <Title>{t('education')}</Title>
 <EducationList>
          {data.map((institutionData, index) => (
            <li key={institutionData.id}>
                <ExperienceItem>
            <ExperienceDuration>
                <p>{institutionData.duration}</p>
              </ExperienceDuration>
              <ExperienceDetails>
                <p><b>{currentLanguage === 'eng' ? institutionData.title : institutionData.titleUa}</b></p>
                <p><i>{currentLanguage === 'eng' ? institutionData.institution : institutionData.titleUa}</i></p>
                </ExperienceDetails>
                </ExperienceItem>
              </li>
          ))}
        </EducationList>
      </Container>
    </Section>
  )
}
