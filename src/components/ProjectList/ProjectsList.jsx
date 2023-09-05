import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import { Container, Section, Title } from 'components/Resume.styled';
import React, { useState } from 'react';
import { ProjectsButtonContainer } from './ProjectList.styled';

export const ProjectList = ({ projects }) => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const selectedProjects = [projects[2], projects[5], projects[0], projects[3]];

  const onAllProjects = () => {
    setIsAllOpen(true);
  };
  const onSelectedProjects = () => {
    setIsAllOpen(false);
  };

  return (
    <Section>
      <Container>
        <Title>Projects</Title>
        <ProjectsButtonContainer>
          <button onClick={onSelectedProjects} disabled={!isAllOpen}>
            Selected
          </button>
          <button onClick={onAllProjects} disabled={isAllOpen}>
            All projects ({projects.length})
          </button>
        </ProjectsButtonContainer>
        <ul>
          {isAllOpen
            ? projects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isAllOpen={isAllOpen}
                />
              ))
            : selectedProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isAllOpen={isAllOpen}
                />
              ))}
        </ul>
      </Container>
    </Section>
  );
};
