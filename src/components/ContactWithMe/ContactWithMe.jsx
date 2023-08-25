import { Feedback } from 'components/Feedback/Feedback';
import { FeedbackContainer } from 'components/Feedback/Feedback.styled';
import { Container, Section } from 'components/Resume.styled';
import { GiNothingToSay } from 'react-icons/gi';

import React, { useState } from 'react'
import { Button } from './ContactWithMe.styled';

export const ContactWithMe = () => {

  const [sendMessage, setSendMessage] = useState(false)


  return (
    <Section>
      <Container>
        <FeedbackContainer>
        <h2>Сontact with me</h2>   
          {sendMessage ? <Feedback /> :
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <GiNothingToSay size={34}/>
            <p style={{ margin: '14px 0' }}>I am open to collaborating on a wide range of projects, both intricate and straightforward, and I am prepared to bring complex ideas to life {`:)`}</p>
            <Button onClick={() => setSendMessage(true)}>Send Message</Button>
          </div>}

        </FeedbackContainer>
      </Container>
    </Section>
  )
}
