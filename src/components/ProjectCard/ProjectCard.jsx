import { Slider } from 'components/Slider/Slider';
import React from 'react';
import { ImageProjectOverlay, ProjectItem, ProjectLinkOverlay, ProjectOverlay, TechnologiesList } from './ProjectCard.styled';
import { useTranslation } from 'react-i18next';
import {CutText} from 'helpers/CutText';

export const ProjectCard = ({ project }) => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <ProjectItem>
      <ProjectOverlay>
        <ImageProjectOverlay>
          <Slider images={project.img} title={currentLanguage === 'eng' ? project.title : project.titleUa}/>
        </ImageProjectOverlay>
      <div>
       <h3>{currentLanguage === 'eng' ? project.title : project.titleUa}</h3>
      <p><i>{currentLanguage === 'eng' ? project.type : project.typeUa}</i></p>
          <TechnologiesList>
            {project.technologies.map((el, index) => (
            <li key={`technologies-${index}`}>{el}      
        </li>
          ))}
            </TechnologiesList>
          <div>
          <p style={{margin: "0"}}>{t('description')}:</p>
          {currentLanguage === 'eng' ?  <CutText text={project.description}/> :  <CutText text={project.descriptionUa}/>}
          </div>
          <p>{t('links')}:</p>
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
