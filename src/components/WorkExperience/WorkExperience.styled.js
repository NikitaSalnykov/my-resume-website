import styled from 'styled-components';

export const ExperienceItem = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (min-width: 768px) {
  gap: 60px;
  }

  @media screen and (min-width: 1200px) {
  gap: 100px;
  }
  &:not(:last-child) {
    margin-bottom:  14px;
  }
`;

export const ExperienceDuration = styled.div`
max-width: 80px;
  @media screen and (min-width: 1200px) {
  max-width: 100px;
  }
`
export const ExperienceDetails = styled.div`

`

export const Delimiter = styled.div`
width: 100%;
height: 1px;
background-color: rgb(241, 241, 241);
margin-bottom: 14px;
`