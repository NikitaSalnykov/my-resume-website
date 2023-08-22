import styled from 'styled-components';

export const ContactsList = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 20px 40px;

flex-direction: column;


  @media screen and (min-width: 375px) {

  }
  @media screen and (min-width: 768px) {
flex-direction: row;


  }
    @media screen and (min-width: 1200px) {

  }

  & li {
    display: flex;
    align-items: center;
    justify-content: unset;
    gap: 10px;

  
  @media screen and (min-width: 375px) {


  }
  @media screen and (min-width: 768px) {

  }
    @media screen and (min-width: 1200px) {

  }
}
`
