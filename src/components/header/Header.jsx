import { useTranslation } from 'react-i18next';
import { FaFileDownload } from 'react-icons/fa';
import { Container, Section } from 'components/Resume.styled';
import { HeaderContainer, Photo, Bio, LanguageSwitcher, LanguageButton } from './Header.styled';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'ua';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <Section>
      <Container>
        <HeaderContainer>
{currentLanguage === 'eng' ? (
            <a href={process.env.PUBLIC_URL + '/files/ResumeSalnykov.pdf'} download>
              <FaFileDownload size={24} />
            </a>
          ) : (
            <a href={process.env.PUBLIC_URL + '/files/ResumeSalnykovUa.pdf'} download>
              <FaFileDownload size={24} />
            </a>
          )}

          {currentLanguage && (
            <LanguageSwitcher>
              <div>
                <LanguageButton
                  onClick={() => changeLanguage('ua')}
                  isActive={currentLanguage === 'ua' || currentLanguage.includes('ua')}
                >
                  укр
                </LanguageButton>
              </div>
              <div>|</div>
              <div>
                <LanguageButton
                  onClick={() => changeLanguage('eng')}
                  isActive={
                    currentLanguage === 'eng' ||
                    currentLanguage.includes('eng') ||
                    currentLanguage !== 'ua'
                  }
                >
                  eng
                </LanguageButton>
              </div>
            </LanguageSwitcher>
          )}

          <Photo>
            <img
              src={process.env.PUBLIC_URL + '/photo.jpg'}
              alt="Nikita Salnykov"
              width={200}
            />
          </Photo>
          <Bio>
            <h1>{t('name')}</h1>
            <p>Front-end developer,</p>
            <p>Project Manager,</p>
            <p>Project Owner</p>
          </Bio>
        </HeaderContainer>
      </Container>
    </Section>
  );
};
