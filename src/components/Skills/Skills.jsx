import { Container, Section } from 'components/Resume.styled';
import { useState } from 'react';
import { SkillsContainer, SkillsList } from './Skills.styled';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const techStack = [
    'HTML5/CSS3',
    'SCSS',
    'Responsive/Adaptive Design',
    'GIT',
    'JavaScript',
    'TypeScript',
    'React',
    'Styled-components',
    'REST API',
    'Material-UI/Tailwind',
    'Axios',
    'Redux Toolkit',
    'Webpack',
    'Parcel',
    'Vite',
  ];

  const softSkills = [
    'Teamwork',
    'Adaptability',
    'Open-mindedness',
    'Scrum Basics',
    'Self-management skills',
    'Organization and Planning skills',
  ];

  const languages = [
    { language: 'English', level: 'Intermediate' },
    { language: 'Ukrainian', level: 'Native' },
    { language: 'Russian', level: 'Native' },
  ];

  // Переклади для назв софт скілів на англійській та українській
  const softSkillsTranslationsEn = {
    'Teamwork': 'Teamwork',
    'Adaptability': 'Adaptability',
    'Open-mindedness': 'Open-mindedness',
    'Scrum Basics': 'Scrum Basics',
    'Self-management skills': 'Self-management skills',
    'Organization and Planning skills': 'Organization and Planning skills',
  };

  const softSkillsTranslationsUa = {
    'Teamwork': 'Командна робота',
    'Adaptability': 'Адаптивність',
    'Open-mindedness': 'Відкритість до нових ідей',
    'Scrum Basics': 'Основи Scrum',
    'Self-management skills': 'Навички самоменеджменту',
    'Organization and Planning skills': 'Навички організації та планування',
  };

  // Опис для англійської мови
  const techStackDescriptionsEn = {
    'HTML5/CSS3': 'Semantic HTML, CSS Grid/Flexbox layouts, responsive & accessible forms',
    'SCSS': 'Modular styles using SCSS, nesting, variables, mixins',
    'Responsive/Adaptive Design': 'Designing adaptable layouts with media queries and fluid grids',
    'GIT': 'Version control, branching, merging, collaboration with Git',
    'JavaScript': 'Interactive elements, DOM manipulation, async programming',
    'TypeScript': 'Static typing, interfaces, types, enhanced code quality',
    'React': 'Building dynamic UIs, state management, React Router',
    'Styled-components': 'Styling React components with dynamic styles',
    'REST API': 'Consuming and designing RESTful APIs, HTTP requests',
    'Axios': 'Making HTTP requests, handling responses with Axios',
    'Redux Toolkit': 'State management with Redux Toolkit, reducers, actions',
    'Material-UI/Tailwind': 'Creating UI components with Material-UI and Tailwind',
    'Webpack': 'Bundling and optimizing assets with Webpack',
    'Parcel': 'Zero-config web application bundler for quick setups',
    'Vite': 'Fast build tool focused on speed for modern web projects',
    'Teamwork': 'Collaborative and effective team player, communication skills',
    'Adaptability': 'Quickly adapt to new challenges and dynamic environments',
    'Open-mindedness': 'Willingness to consider diverse perspectives and ideas',
    'Scrum Basics': 'Fundamental understanding of Scrum framework for agile project management',
    'Self-management skills': 'Effectively managing one’s time, resources, and responsibilities',
    'Organization and Planning skills': 'Skillful planning, organizing tasks, and setting priorities',
  };

  // Опис для української мови
  const techStackDescriptionsUa = {
    'HTML5/CSS3': 'Семантичний HTML, макети CSS Grid/Flexbox, адаптивні та доступні форми',
    'SCSS': 'Модульні стилі з використанням SCSS, вкладеність, змінні, міксини',
    'Responsive/Adaptive Design': 'Розробка адаптивних макетів з медіа-запитами та гнучкими сітками',
    'GIT': 'Контроль версій, гілкування, злиття, співпраця з Git',
    'JavaScript': 'Інтерактивні елементи, маніпуляція DOM, асинхронне програмування',
    'TypeScript': 'Статична типізація, інтерфейси, типи, підвищена якість коду',
    'React': 'Створення динамічних інтерфейсів, управління станом, React Router',
    'Styled-components': 'Стилізація компонентів React з динамічними стилями',
    'REST API': 'Використання та проєктування RESTful API, HTTP запити',
    'Axios': 'Виконання HTTP запитів, обробка відповідей за допомогою Axios',
    'Redux Toolkit': 'Управління станом з Redux Toolkit, редюсери, дії',
    'Material-UI/Tailwind': 'Створення компонентів інтерфейсу з Material-UI та Tailwind',
    'Webpack': 'Пакування та оптимізація активів за допомогою Webpack',
    'Parcel': 'Пакувальник веб-застосунків без налаштувань для швидких налаштувань',
    'Vite': 'Швидкий інструмент для зборки, орієнтований на швидкість для сучасних веб-проєктів',
    'Teamwork': 'Співпраця та ефективна робота в команді, комунікативні навички',
    'Adaptability': 'Швидка адаптація до нових викликів і динамічного середовища',
    'Open-mindedness': 'Готовність враховувати різноманітні точки зору та ідеї',
    'Scrum Basics': 'Основи розуміння фреймворку Scrum для гнучкого управління проєктами',
    'Self-management skills': 'Ефективне управління своїм часом, ресурсами та обов\'язками',
    'Organization and Planning skills': 'Вміння планувати, організовувати завдання та ставити пріоритети',
  };

  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillDescription = skill => {
    if (skill === selectedSkill) return setSelectedSkill(null);
    setSelectedSkill(skill);
  };

  const getSkillDescription = skill => {
    if (currentLanguage === 'ua') {
      return techStackDescriptionsUa[skill] || '';
    }
    return techStackDescriptionsEn[skill] || '';
  };

  const getSoftSkillName = skill => {
    if (currentLanguage === 'ua') {
      return softSkillsTranslationsUa[skill] || skill;
    }
    return softSkillsTranslationsEn[skill] || skill;
  };

  return (
    <Section>
      <Container>
        <SkillsContainer>
          <h3>{t('tech')}</h3>
          <SkillsList>
            {techStack.map((skill, index) => (
              <>
              {selectedSkill !== skill ?               <li key={`tech-${index}`} >
                <p onClick={() => handleSkillDescription(skill)} style={{ display: "flex" }}> 
                  <p>{skill}</p>
                  {selectedSkill === skill && (
                    <span>&nbsp;- {getSkillDescription(skill)}</span>
                  )}
                </p>
              </li> :               
              <li key={`tech-${index}`} style={{ background: "black", color: "white"}} >
                <p onClick={() => handleSkillDescription(skill)} style={{ display: "flex" }}> 
                  <p>{skill}</p>
                  {selectedSkill === skill && (
                    <span>&nbsp;- {getSkillDescription(skill)}</span>
                  )}
                </p>
              </li>}</>

            ))}
          </SkillsList>
        </SkillsContainer>
        <SkillsContainer>
          <h3>{t('soft')}</h3>
          <SkillsList>
          {softSkills.map((skill, index) => (
              <>
              {selectedSkill !== skill ?               <li key={`soft-${index}`} style={{ listStyle: 'none' }}>
                <p onClick={() => handleSkillDescription(skill)}  style={{ display: "flex" }}>
                  <p>{getSoftSkillName(skill)}</p>
                  {selectedSkill === skill && (
                    <span>&nbsp; - {getSkillDescription(skill)}</span>
                  )}
                </p>
              </li> :               
              <li key={`soft-${index}`} style={{ background: "black", color: "white"}} >
              <p onClick={() => handleSkillDescription(skill)}  style={{ display: "flex" }}>
                <p>{getSoftSkillName(skill)}</p>
                {selectedSkill === skill && (
                  <span>&nbsp; - {getSkillDescription(skill)}</span>
                )}
              </p>
            </li>}</>

            ))}
          </SkillsList>
        </SkillsContainer>
       
        <SkillsContainer>
          <h3>{t('languages')}</h3>
          <SkillsList>
          { languages && languages.map(skill => (
              <li key={skill}>
                <p>
                  {skill.language} - {skill.level}
                </p>
              </li>
            )) }
          </SkillsList>
        </SkillsContainer>

      </Container>
    </Section>
  );
};
