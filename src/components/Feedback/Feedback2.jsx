import { Container, Section } from 'components/Resume.styled'
import React, { useState } from 'react'
import { Button, FeedbackContainer, FeedbackForm, Input, Textarea } from './Feedback.styled';
import { TbMailForward } from 'react-icons/tb';

export const Feedback = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  const response = await fetch("https://formspree.io/f/xjvqwppe", {
    method: "POST",
    body: formData,
  });

  console.log(response); // Вывести объект response в консоль
};

  return (
    <Section>
      <Container>
        <FeedbackContainer>
       <h2>Сontact with me</h2>       
      <FeedbackForm action="https://formspree.io/f/xjvqwppe"
  method="POST" onSubmit={handleSubmit}>
      <Input
              type="text"
              name="name"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
              placeholder="Email"
               name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <Textarea
                placeholder="Сообщение"
                name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
              <Button type="submit"><TbMailForward size={24} color={"white"} /></Button>
      </div>
    </FeedbackForm>
        </FeedbackContainer>
      </Container>
    </Section>
  )
}
