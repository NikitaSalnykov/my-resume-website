import { Container, Section } from "components/Resume.styled"
import { SkillsContainer, SkillsList } from "./Skills.styled";

export const Skills = () => {
  const techStack = [
  "HTML5/CSS3",
  "SCSS",
  "Responsive/Adaptive Design",
  "GIT",
  "JavaScript",
  "TypeScript",
  "React",
  "Styled-components",
  "REST API",
  "Webpack",
  "Parcel",
  "Vite"
];
  const softSkills = [
  "Teamwork",
  "Adaptability",
  "Open-mindedness",
  "Scrum Basics"
  ];
  
  const languages = [
  { language: "English", level: "Intermediate" },
  { language: "Ukrainian", level: "Native" },
  { language: "Russian", level: "Native" }
];

  return (
    <Section>
      <Container>
        <SkillsContainer>
          <h3>Tech Stack</h3>
          <SkillsList>
            {techStack.map(skill => (
              <li>
                <p>{skill}</p>
              </li>
            ))}
          </SkillsList>
        </SkillsContainer>
        <SkillsContainer>
          <h3>Soft Skills</h3>
          <SkillsList>
            {softSkills.map(skill => (
              <li>
                <p>{skill}</p>
              </li>
            ))}
          </SkillsList>
        </SkillsContainer>
        <SkillsContainer>
          <h3>Languages</h3>
          <SkillsList>
              {languages.map(skill => (
                <li>
                  <p>{skill.language} - {skill.level}</p>
                </li>
            ))}
          </SkillsList>
      </SkillsContainer>
      </Container>
    </Section>
  )
}