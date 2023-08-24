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
        padding: 5px 7px;
    transition: 0.2s ease-in-out;
    opacity: 0.8;
}

    & li:hover {
    opacity: 1;

    }
`
