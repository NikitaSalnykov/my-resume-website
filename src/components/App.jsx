import React, { useState } from 'react';
import { AboutMe } from './AboutMe/AboutMe.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { Skills } from './Skills/Skills.jsx';
import workExperience from '../data/workExperience.json';
import education from '../data/education.json';
import projects from '../data/projects.json';
import { WorkExperience } from './WorkExperience/WorkExperience.jsx';
import { Education } from './Education/Education.jsx';
import { ProjectList } from './ProjectList/ProjectsList.jsx';
import { Header } from './header/Header.jsx';
import { Modal } from './Modal/Modal.jsx';
import { Scroll } from './Scroll/Scroll.jsx';
import { ContactWithMe } from './ContactWithMe/ContactWithMe.jsx';
import { Footer } from './Footer/Footer.jsx';

export const Context = React.createContext();

export const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const showModal = img => {
    setModalActive(true);
    setModalImg(img);
  };

  const closeModal = () => setModalActive(false);

  return (
    <Context.Provider value={{ open: showModal, close: closeModal }}>
      <Header />
      <Contacts />
      <AboutMe />
      <Skills />
      <ProjectList projects={projects} />
      <WorkExperience data={workExperience} />
      <Education data={education} />
      {modalActive && <Modal image={modalImg} />}
      <ContactWithMe />
      <Footer/>
      <Scroll />
    </Context.Provider>
  );
};
