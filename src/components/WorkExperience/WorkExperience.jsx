import { Container, Section, Title } from 'components/Resume.styled'
import React from 'react'
import { Delimiter, ExperienceDetails, ExperienceDuration, ExperienceItem, ExperienceSecondaryItem } from './WorkExperience.styled'

export const WorkExperience = ({ data }) => {
  return (
    <Section>
      <Container>
        <Title>Work Experience</Title>
        <ul>
          {data.map((companyData, index) => (
            <li key={companyData.id}>
                <ExperienceItem>
                                <ExperienceDuration>
                <p>{companyData.duration}</p>
              </ExperienceDuration>
              <ExperienceDetails>
                <p><b>{companyData.company}</b></p>
                <p style={{marginBottom: "14px"}}><i>{companyData.position}</i></p>
                <ul style={{listStyle: "circle"}}>
                  {companyData.responsibilities.map((responsibility, index) => (
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