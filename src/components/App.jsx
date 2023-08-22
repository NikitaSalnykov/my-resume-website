import { AboutMe } from "./AboutMe/AboutMe.jsx";
import { Contacts } from "./Contacts/Contacts.jsx";
import { Header } from "./Header/Header.jsx";
import { Skills } from "./Skills/Skills.jsx";
import workExperience from '../data/workExperience.json'
import education from '../data/education.json'
import { WorkExperience } from "./WorkExperience/WorkExperience.jsx";
import { Education } from "./Education/Education.jsx";


export const App = () => {
  return (
    <>
      <Header />
      <Contacts />
      <AboutMe/>
      <Skills />
      <WorkExperience data={workExperience} />
      <Education data={education}/>
    </>
  );
};
