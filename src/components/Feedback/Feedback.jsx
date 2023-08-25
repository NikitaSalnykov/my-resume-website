import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button, FeedbackForm, Input, Textarea } from './Feedback.styled';
import { TbMailForward } from 'react-icons/tb';
import { MdMarkEmailRead } from 'react-icons/md';

export const Feedback = () => {

  const [state, handleSubmit] = useForm("xjvqwppe");
  if (state.succeeded) {
    return <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        <MdMarkEmailRead size="34" style={{padding: '10'}}/> 
      <p><b>The message has been sent!</b></p>
      <p style={{ margin: '14px 0' }}>I will try to answer you as soon as possible</p>
      </div>;
  }
  
  return (
    <FeedbackForm onSubmit={handleSubmit}>
      <Input
        id="name"
        type="text" 
        name="name"
        placeholder="Name"
      />
      <ValidationError 
        prefix="Имя" 
        field="name"
        errors={state.errors}
      />
      <Input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting}>
          <TbMailForward size={24} color={"white"} />
        </Button>
      </div>
    </FeedbackForm>
  );
}
