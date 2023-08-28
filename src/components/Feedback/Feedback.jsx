import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ButtonSubmit, FeedbackForm, Input, Textarea } from './Feedback.styled';
import { TbMailForward } from 'react-icons/tb';
import { MdMarkEmailRead } from 'react-icons/md';

export const Feedback = () => {

  const [state, handleSubmit] = useForm("xjvqwppe");
  if (state.succeeded) {
    return (
      <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        <MdMarkEmailRead size="34" style={{padding: '10'}}/> 
        <p><b>The message has been sent!</b></p>
        <p style={{ margin: '14px 0' }}>I will try to answer you as soon as possible</p>
      </div>
    );
  }
  
  return (
    <FeedbackForm onSubmit={handleSubmit}>
      <Input
        id="name"
        type="text" 
        name="name"
        placeholder="Name"
        minLength="2"
        maxLength="30"
        required
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <Input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
         maxLength="36"
        required
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
          minLength="1" 
          maxLength="500"
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <ButtonSubmit type="submit" disabled={state.submitting}>
          <TbMailForward size={24} color={"white"} />
        </ButtonSubmit>
      </div>
    </FeedbackForm>
  );
}
