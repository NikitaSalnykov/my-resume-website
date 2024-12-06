import { Container, Section } from 'components/Resume.styled';
import { useState } from 'react';
import { SkillsContainer, SkillsList } from './Skills.styled';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
    'Node.js',
    'Express.js',
    'Next.js',
    'WebSockets',
    'Docker',
    'Authentication/Authorization',
    'React Native',
    'Formik/React Hook Form',
    'Zustand',
    'ESLint/Prettier',
    'Redux',
    'Tailwind CSS',
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

  // Переводы для soft skills
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

  // Описание для tech stack
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
    "Formik/React Hook Form": "Form management and validation in React applications",
    "Node.js": "Server-side development, working with files, streams, APIs, and server applications",
    "Express.js": "Building server-side applications and REST APIs with a minimalist framework",
    "Next.js": "Developing server-rendered applications (SSR) and static sites (SSG)",
    "ESLint/Prettier": "Maintaining code quality and automatic formatting",
    "WebSockets": "Real-time implementation using two-way communication",
    "Docker": "Application containerization and environment management",
    "Authentication/Authorization": "Implementing OAuth, JWT, and Cookies for secure access",
    "React Native": "Building cross-platform mobile applications using React",
    "Zustand": "Lightweight state management for React applications",
    "Redux": "State management for complex React applications, actions, reducers",
    "Tailwind CSS": "Utility-first CSS framework for rapidly building custom designs",
    'Webpack': 'Bundling and optimizing assets with Webpack',
    'Parcel': 'Zero-config web application bundler for quick setups',
    'Vite': 'Fast build tool focused on speed for modern web projects',
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
    "Formik/React Hook Form": "Управління та валідація форм у React-додатках",
    "Node.js": "Серверна розробка, робота з файлами, потоками, API та серверними додатками",
    "Express.js": "Створення серверних додатків та REST API за допомогою мінімалістичного фреймворка",
    "Next.js": "Розробка додатків із серверним рендерингом (SSR) і статичних сайтів (SSG)",
    "ESLint/Prettier": "Підтримка якості коду та автоматичне форматування",
    "WebSockets": "Реалізація взаємодії в реальному часі через двосторонній зв'язок",
    "Docker": "Контейнеризація додатків та управління середовищами",
    "Authentication/Authorization": "Реалізація OAuth, JWT та Cookies для безпечного доступу",
    "React Native": "Розробка кросплатформних мобільних додатків з використанням React",
    "Zustand": "Легке управління станом у React-додатках",
    "Redux": "Управління станом для складних React-додатків, дії, ред'юсери",
    "Tailwind CSS": "CSS-фреймворк з підходом utility-first для швидкого створення кастомного дизайну",
    'Webpack': 'Пакування та оптимізація активів за допомогою Webpack',
    'Parcel': 'Пакувальник веб-застосунків без налаштувань для швидких налаштувань',
    'Vite': 'Швидкий інструмент для зборки, орієнтований на швидкість для сучасних веб-проєктів',
    
  };

  const softSkillsDescriptionsEn = {
    'Teamwork': 'Collaborative and effective team player, communication skills',
    'Adaptability': 'Quickly adapt to new challenges and dynamic environments',
    'Open-mindedness': 'Willingness to consider diverse perspectives and ideas',
    'Scrum Basics': 'Fundamental understanding of Scrum framework for agile project management',
    'Self-management skills': 'Effectively managing one’s time, resources, and responsibilities',
    'Organization and Planning skills': 'Skillful planning, organizing tasks, and setting priorities',
  };
  
  const softSkillsDescriptionsUa = {
    'Teamwork': 'Співпраця та ефективна робота в команді, комунікативні навички',
    'Adaptability': 'Швидка адаптація до нових викликів і динамічного середовища',
    'Open-mindedness': 'Готовність враховувати різноманітні точки зору та ідеї',
    'Scrum Basics': 'Основи розуміння фреймворку Scrum для гнучкого управління проєктами',
    'Self-management skills': 'Ефективне управління своїм часом, ресурсами та обов\'язками',
    'Organization and Planning skills': 'Вміння планувати, організовувати завдання та ставити пріоритети',
  };

  const [expandedCategories, setExpandedCategories] = useState({
    tech: true,
    soft: true,
    languages: true,
  });

  const [selectedSkill, setSelectedSkill] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleSkillDescription = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };

  const getSkillDescription = (skill, category) => {
    if (category === 'soft') {
      if (currentLanguage === 'ua') {
        return softSkillsDescriptionsUa[skill] || '';
      }
      return softSkillsDescriptionsEn[skill] || '';
    }
    if (category === 'tech') {
      if (currentLanguage === 'ua') {
        return techStackDescriptionsUa[skill] || '';
      }
      return techStackDescriptionsEn[skill] || '';
    }
    return '';
  };

  const getSoftSkillName = (skill) => {
    if (currentLanguage === 'ua') {
      return softSkillsTranslationsUa[skill] || skill;
    }
    return softSkillsTranslationsEn[skill] || skill;
  };

  return (
    <Section>
      <Container>
        {/* Технические навыки */}
        <SkillsContainer>
          <div onClick={() => toggleCategory('tech')} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', paddingBottom: '6px' }}>
            <h3>{t('tech')}</h3>
            {expandedCategories.tech ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <div
            style={{
              maxHeight: expandedCategories.tech ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.5s ease',
            }}
          >
            <SkillsList>
              {techStack.map((skill, index) => (
                <li
                  key={`tech-${index}`}
                  style={selectedSkill === skill ? { background: 'black', color: 'white' } : {}}
                >
                  <p onClick={() => handleSkillDescription(skill)}>
                    {skill} {selectedSkill === skill && ` - ${getSkillDescription(skill, 'tech')}`}
                  </p>
                </li>
              ))}
            </SkillsList>
          </div>
        </SkillsContainer>

        {/* Софт-скилы */}
        <SkillsContainer>
  <div
    onClick={() => toggleCategory('soft')}
    style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', paddingBottom: '6px' }}
  >
    <h3>{t('soft')}</h3>
    {expandedCategories.soft ? <IoIosArrowUp /> : <IoIosArrowDown />}
  </div>
  <div
    style={{
      maxHeight: expandedCategories.soft ? '1000px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.5s ease',
    }}
  >
    <SkillsList>
      {softSkills.map((skill, index) => (
        <li
          key={`soft-${index}`}
          style={selectedSkill === skill ? { background: 'black', color: 'white' } : {}}
        >
          <p onClick={() => handleSkillDescription(skill)}>
            {getSoftSkillName(skill)}
            {selectedSkill === skill && ` - ${getSkillDescription(skill, 'soft')}`}
          </p>
        </li>
      ))}
    </SkillsList>
  </div>
</SkillsContainer>

        {/* Языки */}
        <SkillsContainer>
          <div onClick={() => toggleCategory('languages')} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', paddingBottom: '6px' }}>
            <h3>{t('languages')}</h3>
            {expandedCategories.languages ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <div
            style={{
              maxHeight: expandedCategories.languages ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.5s ease',
            }}
          >
            <SkillsList>
              {languages.map((skill, index) => (
                <li key={`lang-${index}`}>
                  <p>
                    {skill.language} - {skill.level}
                  </p>
                </li>
              ))}
            </SkillsList>
          </div>
        </SkillsContainer>
      </Container>
    </Section>
  );
};
