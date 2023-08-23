import { Delimiter } from 'components/WorkExperience/WorkExperience.styled';
import React from 'react';
import { ImageProject, ProjectItem, ProjectOverlay, TechnologiesList } from './ProjectCard.styled';

export const ProjectCard = ({ project, isAllOpen }) => {
  return (
    <ProjectItem>
        <ProjectOverlay>
      <ImageProject src={process.env.PUBLIC_URL + project.img} alt={project.title} />
      <div>
       <h3>{project.title}</h3>
      <p><i>{project.type}</i></p>
          <TechnologiesList>
            {project.technologies.map((el, index) => (
            <li key={`technologies-${index}`}>{el}      
        </li>
          ))}
            </TechnologiesList>
      <p>Description: {project.description}</p>
      <div>
        <a href={project.page} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        <a href={project.repositorium} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
</div>
      </ProjectOverlay>
  {(!isAllOpen && project.id !== 3 || isAllOpen && project.id !== 5) && <Delimiter style={{marginTop: '24px'}}/>}

  </ProjectItem>
  );
};
