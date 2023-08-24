import { Container, Section } from 'components/Resume.styled';
import React from 'react';
import { HeaderContainer, Photo, Bio } from './Header.styled';
import { FaFileDownload } from 'react-icons/fa';

export const Header = () => {
  return (
    <Section>
      <Container>
        <HeaderContainer>
          <a
            href={process.env.PUBLIC_URL + '/files/ResumeSalnykov.png'}
            download
          >
            <FaFileDownload size={24} />
          </a>

          <Photo>
            <img
              src={process.env.PUBLIC_URL + '/photo.jpg'}
              alt="Nikita Salnykov"
              width={200}
            />
          </Photo>
          <Bio>
            <h1>Salnykov Nikita</h1>
            <p>Junior front-end developer</p>
          </Bio>
        </HeaderContainer>
      </Container>
    </Section>
  );
};
