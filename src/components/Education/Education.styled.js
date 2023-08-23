import styled from 'styled-components';

export const EducationList = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 20px 40px;

 @media screen and (min-width: 768px) {
  flex-direction: row;
  gap: 60px;
  }

  @media screen and (min-width: 1200px) {
  gap: 100px;
  }
`

export const DelimiterVertical = styled.div`
height: 100%;
width: 3px;
background-color: rgb(241, 241, 241);
margin-bottom: 14px;
`