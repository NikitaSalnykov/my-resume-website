import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import { Container, Section, Title } from 'components/Resume.styled';
import React, { useState } from 'react';
import { ProjectsButtonContainer } from './ProjectList.styled';
import { useTranslation } from 'react-i18next';

export const ProjectList = ({ projects }) => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const selectedProjects = [projects[6], projects[7], projects[2], projects[8]];
  const { t } = useTranslation();

  const onAllProjects = () => {
    setIsAllOpen(true);
  };
  const onSelectedProjects = () => {
    setIsAllOpen(false);
  };

  return (
    <Section>
      <Container>
        <Title>{t('projects')}</Title>
        <ProjectsButtonContainer>
          <button onClick={onSelectedProjects} disabled={!isAllOpen}>
            {t('selected-projects')}
          </button>
          <button onClick={onAllProjects} disabled={isAllOpen}>
            {t('all-projects')} ({projects.length})
          </button>
        </ProjectsButtonContainer>
        <ul>
          {isAllOpen
            ?  [...projects].reverse().map(project => (
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
