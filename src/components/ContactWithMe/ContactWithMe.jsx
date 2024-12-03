import { Feedback } from 'components/Feedback/Feedback';
import { FeedbackContainer } from 'components/Feedback/Feedback.styled';
import { Container, Section } from 'components/Resume.styled';
import { GiNothingToSay } from 'react-icons/gi';
import React, { useState } from 'react';
import { Button } from './ContactWithMe.styled';
import { useTranslation } from 'react-i18next';

export const ContactWithMe = () => {
  const [sendMessage, setSendMessage] = useState(false);
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <FeedbackContainer>
          <h2>{t('contact-with-me')}</h2> 
          {sendMessage ? (
            <Feedback />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <GiNothingToSay size={34} />
              <p style={{ margin: '14px 0' }}>
                {t('collaboration-open')} 
              </p>
              <Button onClick={() => setSendMessage(true)}>{t('send-message')}</Button> 
            </div>
          )}
        </FeedbackContainer>
      </Container>
    </Section>
  );
};
