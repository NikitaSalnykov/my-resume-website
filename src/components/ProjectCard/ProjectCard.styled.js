import styled from 'styled-components';

export const ImageProject = styled.img`
    width: 525px;
    object-fit: cover;
    height: 280px;
    border-radius: 30px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 400px;
        height: 300px;
  }

  @media screen and (min-width: 1200px) {
    width: 525px;
            height: 320px;

  }
`;

export const ProjectOverlay = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
     gap: 40px;
      flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    gap: 8 0px;
  }

  & h3 {
    margin-bottom: 6px;
  }

  & p {
    margin-bottom: 14px;
  }
`;

export const ProjectItem = styled.li`
  margin-bottom: 24px;
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const TechnologiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  margin-bottom: 24px;

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