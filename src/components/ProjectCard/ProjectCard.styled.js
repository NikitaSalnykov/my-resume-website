import styled from 'styled-components';


export const ImageProjectOverlay = styled.div`
    width: 320px;

  & img {
      object-fit: cover;
      object-position: top;
       height: 200px;
       border-radius: 10px;
       width: 100%;
      
  @media screen and (min-width: 375px) {
         height: 295px;
      
  }

  @media screen and (min-width: 768px) {
             height: 318px;
  }

  @media screen and (min-width: 1200px) {
height: 300px;
  }
  }
`;

export const ProjectOverlay = styled.div`
  display: flex;
  align-items: center;
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
    width: 100%;

      :not(:last-child) {
    padding-bottom: 32px;
    border-bottom: solid 1px  rgb(241, 241, 241);;
  }


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
        transition: 0.2s ease-in-out;

  }

  & li:hover {
    background-color: rgb(218 218 218);;
  }
`;

export const ProjectLinkOverlay = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;


  & a {
    display:flex;
    padding: 5px 10px;
    color: white;
    background-color: rgb(30, 30, 30);
    border-radius: 20px;
    opacity: 0.9;
    transition: 0.2s ease-in-out;
    &:hover {
opacity: 1;
    }
  }


`;