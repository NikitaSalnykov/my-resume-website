import React from 'react'
import { HiLocationMarker } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImMail4 } from 'react-icons/im';
import { BsTelegram } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { ContactsList } from './Contacts.styled';
import { Container, Section } from 'components/Resume.styled';


export const Contacts = () => {
  
  return (
    <Section>
      <Container>
      <ContactsList
      style={{
      borderRadius: '10px', backgroundColor: '#F1F1F1', paddingTop: '20px',
      paddingBottom: '20px'
    }}>
        <li>
          <HiLocationMarker size='18'/>
          <p> Dnipro, Ukraine</p>
        </li>
        <li>
          <FaPhoneAlt size='18'/>
          <a href="tel: +380672037580">+38 (067) 203 75 80 </a>
        </li>
        <li>
          <BsTelegram size='18'/>
          <a href="#">Telegram</a>
        </li>
        <li>
          <ImMail4 size='18'/>
          <a href="mailto: salnikov.nkt@gmail.com"> salnikov.nkt@gmail.com</a>
        </li>
        <li>
          <AiFillGithub size='18'/>
          <a href="#">GitHub</a>
        </li>
        <li>
          <AiFillLinkedin size='18'/>
          <a href="#">LinkedIn</a>
        </li>
        </ContactsList>
      </Container>
    </Section>
  )
}