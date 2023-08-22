import { Container, Section } from 'components/Resume.styled'
import {  Delimiter, ExperienceDetails, ExperienceDuration, ExperienceItem } from 'components/WorkExperience/WorkExperience.styled'
import React from 'react'
import { DelimiterVertical, EducationList } from './Education.styled'

export const Education = ({data}) => {
  return (
        <Section>
      <Container>
        <h2>Education</h2>
 <EducationList>
          {data.map((institutionData, index) => (
            <>
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
            </>
          ))}
        </EducationList>
      </Container>
    </Section>
  )
}
              // {index !== data.length-1 && <DelimiterVertical/>}