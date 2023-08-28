import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  position: relative;

  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: #1e1e1e;
  color: white;
  border-radius: 20px;

  @media screen and (min-width: 375px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1200px) {
  }

  & div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
      width: 202px;
        @media screen and (min-width: 375px) {
  width: 272px;
  }

  @media screen and (min-width: 768px) {
  width: 372px;
  }
  @media screen and (min-width: 1200px) {
  }
  }
  `

export const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 160px;
    @media screen and (min-width: 375px) {
  width: 230px;
  }

  @media screen and (min-width: 768px) {
  width: 330px;
  }
  @media screen and (min-width: 1200px) {
  }
  `

  export const Input = styled.input`
  width: 100%;
  padding: 7px 20px;
  border-radius: 5px;
  background-color: transparent;
    color: white;
    border: 1px solid white;
  opacity: 0.6;
  &:valid {
      opacity: 1;
  }
  &:not(:placeholder-shown):invalid {
       border: 1px solid #ff3737;
  }
  `

  export const Textarea = styled.textarea`
  resize: none;
    width: 100%;
  height: 100px;
    padding: 7px 20px;
    border-radius: 10px;
      background-color: transparent;
    color: white;
    border: 1px solid white;
  opacity: 0.6;
  &:valid {
      opacity: 1;
  }
  &:not(:placeholder-shown):invalid {
       border: 1px solid #ff3737;
  }
  `

export const Button = styled.button`
   padding: 18px 7px;
   display: flex;
   align-items:center;
   justify-content:center;
    background-color: transparent;
    border:  none;
  cursor: pointer;
   transition: 0.3s ease-in-out;
  `

  
export const ButtonSubmit = styled(Button)`
    opacity: 0.8;
    
    &:hover { 
    opacity: 1;
    }
`