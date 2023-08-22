import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 375px) {
      padding-left: 20px;
  padding-right: 20px;
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    
    padding-left: 32px;
    padding-right: 32px;
  }
    @media screen and (min-width: 1200px) {
    width: 1132px;
  }
`;

export const Section = styled.section`
  padding-top: 15px;

  @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1200px) {

  }
`;