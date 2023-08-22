import { Container, Section } from 'components/Resume.styled'
import React from 'react'
import { Delimiter, ExperienceDetails, ExperienceDuration, ExperienceItem } from './WorkExperience.styled'

export const WorkExperience = ({ data }) => {
  return (
    <Section>
      <Container>
        <h2>Work Experience</h2>
        <ul>
          {data.map((companyData, index) => (
            <>
            <li key={companyData.id}>
                <ExperienceItem>
                                <ExperienceDuration>
                <p>{companyData.duration}</p>
              </ExperienceDuration>
              <ExperienceDetails>
                <p><b>{companyData.company}</b></p>
                <p style={{marginBottom: "14px"}}><i>{companyData.position}</i></p>
                <ul>
                  {companyData.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>

                  ))}
                </ul>
              </ExperienceDetails>
                </ExperienceItem>
                             {index !== data.length-1 && <Delimiter/>}
            </li>

          </>
          ))}
        </ul>
      </Container>
    </Section>
  )
}