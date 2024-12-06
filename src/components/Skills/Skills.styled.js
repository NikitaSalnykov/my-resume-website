import styled from 'styled-components';

export const SkillsList = styled.ul`
  display: flex;
  padding: 0 10px;
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
    transition: 0.3s ease-in-out;
    cursor: pointer;
    transform: scale(1);
  }

  & li:hover {
    background-color: rgb(218 218 218);;
  }
`;

export const SkillsContainer = styled.div`
      margin-bottom: 14px;
`

// export const SkillsDescription = styled.div`
//     position: absolute;
//     bottom: 0px;
//     right: 0px;
//     text-align: center;
//     color: white;
//     background-color: rgba(0, 0, 0, 0.61);
//     transform: translate(0, -39px);
//     border-radius: 22px 22px 2px;
//     padding: 16px;
//     font-size: small;
//     line-height: 15px;
//     width: 100%;

// `
