import { Container, Section, Title } from 'components/Resume.styled'
import React from 'react'
import { Delimiter, ExperienceDetails, ExperienceDuration, ExperienceItem } from './WorkExperience.styled'
import { useTranslation } from 'react-i18next';

export const WorkExperience = ({ data }) => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language

  return (
    <Section>
      <Container>
        <Title>{t('work-experience')}</Title>
        <ul>
          {data.map((companyData, index) => (
            <li key={companyData.id}>
                <ExperienceItem>
                                <ExperienceDuration>
                <p>{companyData.duration}</p>
              </ExperienceDuration>
              <ExperienceDetails>
                <p><b>{currentLanguage === 'eng' ? companyData.company : companyData.companyUa}</b></p>
                <p style={{marginBottom: "14px"}}><i>{currentLanguage === 'eng' ? companyData.position : companyData.positionUa}</i></p>
                <ul style={{listStyle: "circle"}}>
                  {currentLanguage === 'eng' ? companyData.responsibilities.map((responsibility, index) => (
                    <li key={index}><p>{responsibility}</p></li>

                  )) : companyData.responsibilitiesUa.map((responsibility, index) => (
                    <li key={index}><p>{responsibility}</p></li>

                  ))}
                </ul>
              </ExperienceDetails>
                </ExperienceItem>
                             {index !== data.length-1 && <Delimiter/>}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}