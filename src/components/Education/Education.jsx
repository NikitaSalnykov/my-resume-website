import { Container, Section, Title } from 'components/Resume.styled'
import { ExperienceDetails, ExperienceDuration, ExperienceItem } from 'components/WorkExperience/WorkExperience.styled'
import React from 'react'
import { EducationList } from './Education.styled'

export const Education = ({data}) => {
  return (
        <Section>
      <Container>
        <Title>Education</Title>
 <EducationList>
          {data.map((institutionData, index) => (
            <li key={institutionData.id}>
                <ExperienceItem>
            <ExperienceDuration>
                <p>{institutionData.duration}</p>
              </ExperienceDuration>
              <ExperienceDetails>
                <p><b>{institutionData.title}</b></p>
                <p><i>{institutionData.institution}</i></p>
                </ExperienceDetails>
                </ExperienceItem>
              </li>
          ))}
        </EducationList>
      </Container>
    </Section>
  )
}
              // {index !== data.length-1 && <DelimiterVertical/>}