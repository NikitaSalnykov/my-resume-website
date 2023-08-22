import styled from 'styled-components';

export const SkillsList = styled.ul`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  gap: 10px 20px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
  }

  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    background-color: rgb(241, 241, 241);
    border-radius: 20px;
  }
`;

export const SkillsContainer = styled.div`
      margin-bottom: 14px;
    & h3 {
      margin-bottom: 14px;
    }
`