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
width: 35px;
line-height: 18px;
text-align: center;

  @media screen and (min-width: 1200px) {
  width: 100px;
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
