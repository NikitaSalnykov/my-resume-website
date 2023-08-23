import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import { Container, Section, Title } from 'components/Resume.styled';
import React, { useState } from 'react';

export const ProjectList = ({ projects }) => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const selectedProjects = projects.slice(0, 3)

  return (
    <Section>
      <Container>
        <Title>Projects</Title>
         <ul>
      {isAllOpen ? projects.map(project => (
        <ProjectCard key={project.id} project={project} isAllOpen={isAllOpen}/>
      )) : selectedProjects.map(project => (
        <ProjectCard key={project.id} project={project} isAllOpen={isAllOpen}/>
      ))}
        </ul>
        {!isAllOpen && <button onClick={() => setIsAllOpen(true)}>All projects</button>}
        {isAllOpen && <button onClick={() => setIsAllOpen(false)}>Hide</button>}
      </Container>
   </Section>
  );
};
