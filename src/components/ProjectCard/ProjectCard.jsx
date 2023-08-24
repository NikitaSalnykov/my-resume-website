import { Slider } from 'components/Slider/Slider';
import React from 'react';
import { ImageProjectOverlay, ProjectItem, ProjectLinkOverlay, ProjectOverlay, TechnologiesList } from './ProjectCard.styled';

export const ProjectCard = ({ project }) => {
  return (
    <ProjectItem>
      <ProjectOverlay>
        <ImageProjectOverlay>
          <Slider images={project.img} title={project.title}/>
        </ImageProjectOverlay>
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
          <p>Links:</p>
      <ProjectLinkOverlay>
        <a href={project.page} target="_blank" rel="noopener noreferrer">
          Page
        </a>
        <a href={project.repositorium} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </ProjectLinkOverlay>
</div>
      </ProjectOverlay>
  </ProjectItem>
  );
};
