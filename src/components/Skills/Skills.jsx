import { Container, Section } from "components/Resume.styled"
import { useState } from "react";
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

  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillDescription = (skill) => {
    console.log(skill, selectedSkill);
    if(skill === selectedSkill) return setSelectedSkill('');
    setSelectedSkill(skill);
  }

  const getSkillDescription  = (skill) => {
switch (skill) {
  case 'HTML5/CSS3':
    return 'Semantic HTML, CSS Grid/Flexbox layouts, responsive & accessible forms';
  case 'SCSS':
    return 'Modular styles using SCSS, nesting, variables, mixins';
  case 'Responsive/Adaptive Design':
    return 'Designing adaptable layouts with media queries and fluid grids';
  case 'GIT':
    return 'Version control, branching, merging, collaboration with Git';
  case 'JavaScript':
    return 'Interactive elements, DOM manipulation, async programming';
  case 'TypeScript':
    return 'Static typing, interfaces, types, enhanced code quality';
  case 'React':
    return 'Building dynamic UIs, state management, React Router';
  case 'Styled-components':
    return 'Styling React components with dynamic styles';
  case 'REST API':
    return 'Consuming and designing RESTful APIs, HTTP requests';
  case 'Webpack':
    return 'Bundling and optimizing assets with Webpack';
  case 'Parcel':
    return 'Zero-config web application bundler for quick setups';
  case 'Vite':
    return 'Fast build tool focused on speed for modern web projects';
  case 'Teamwork':
    return 'Collaborative and effective team player, communication skills';
  case 'Adaptability':
    return 'Quickly adapt to new challenges and dynamic environments';
  case 'Open-mindedness':
    return 'Willingness to consider diverse perspectives and ideas';
  case 'Scrum Basics':
    return 'Fundamental understanding of Scrum framework for agile project management';
  default:
    return '';
}
  }

  return (
    <Section>
      <Container>
        <SkillsContainer>
          <h3>Tech Stack</h3>
          <SkillsList>
  {techStack.map((skill, index) => (
    <>
    { selectedSkill === skill ? (
       <li  style={{background: '#1e1e1e', color: 'white',
    textAlign: 'center', padding: '12px'}} key={`soft-${index}`}>
        <p onClick={() => handleSkillDescription(skill)}>
          <b>{skill}</b>
          <span>
            {` - ` + getSkillDescription(selectedSkill)}
          </span>
        </p>
            </li>
    ) : (
           <li key={`soft-${index}`} style={{filter: "blur(1px)"}}>
        <p onClick={() => handleSkillDescription(skill)}>
          {skill}
        </p>
            </li>
      )}
</>
  ))}
          </SkillsList>
        </SkillsContainer>
        <SkillsContainer>
          <h3>Soft Skills</h3>
          <SkillsList>
  {softSkills.map((skill, index) => (
    <>
    { selectedSkill === skill ? (
       <li  style={{background: '#1e1e1e', color: 'white',
    textAlign: 'center', padding: '12px'}} key={`soft-${index}`}>
        <p onClick={() => handleSkillDescription(skill)}>
          <b>{skill}</b>
          <span>
            {` - ` + getSkillDescription(selectedSkill)}
          </span>
        </p>
            </li>
    ) : (
           <li key={`soft-${index}`}>
        <p onClick={() => handleSkillDescription(skill)}>
          {skill}
        </p>
            </li>
      )}
</>
  ))}
          </SkillsList>
        </SkillsContainer>
        <SkillsContainer>
          <h3>Languages</h3>
          <SkillsList>
            {languages.map((skill, index) => (
              <li key={`lang-${index}`}>
                <p>{skill.language} - {skill.level}</p>
              </li>
            ))}
          </SkillsList>
        </SkillsContainer>
      </Container>
    </Section>
  );
};
