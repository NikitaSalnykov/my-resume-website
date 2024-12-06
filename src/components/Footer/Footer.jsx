import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImMail4 } from 'react-icons/im';
import { BsTelegram } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from 'components/Resume.styled';
import { ContactsList } from 'components/Contacts/Contacts.styled';
import { FaFileDownload } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language || "ua";


  return (
    <section style={{ marginTop: '8px' }}>
      <Container>
        <ContactsList
          style={{
            borderRadius: '10px',
            backgroundColor: '#F1F1F1',
            paddingTop: '20px',
            paddingBottom: '20px',
            gap: '10px',
            flexFlow: "row"
          }}
        >
          <li>

            <a href="tel:+380672037580">            <FaPhoneAlt size="20" /></a>
          </li>
          <li>
            <a
              href="https://t.me/nikitanespi"
              target="_blank"
              rel="noopener noreferrer"
            >            <BsTelegram size="20" /></a>
          </li>
          <li>

            <a href="mailto:salnikov.nkt@gmail.com">            <ImMail4 size="20" /></a>
          </li>
          <li>

            <a
              href="https://github.com/NikitaSalnykov"
              target="_blank"
              rel="noopener noreferrer"
            >            <AiFillGithub size="22" />
            </a>
          </li>
          <li>

            <a
              href="https://www.linkedin.com/in/nikita-salnykov-14202127a/"
              target="_blank"
              rel="noopener noreferrer"
            >             <AiFillLinkedin size="21" />
            </a>
          </li>
          <li>
          {currentLanguage === "eng" ? <a href={process.env.PUBLIC_URL + '/files/ResumeSalnykov.pdf'} download>
            <FaFileDownload size={18} />
          </a> : <a href={process.env.PUBLIC_URL + '/files/ResumeSalnykovUa.pdf'} download>
            <FaFileDownload size={18} />
          </a>}
          </li>
        </ContactsList>
      </Container>
    </section>
  );
};
