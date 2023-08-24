import styled from 'styled-components';

export const ProjectsButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: large;
    gap: 30px;
    margin-bottom: 24px;
    & button {
          padding: 2px 10px;
      border-radius: 20px;
      border: none;
      background-color: transparent;
      cursor: pointer;
                transition: 0.2s ease-in-out;
      &:hover {
        background: rgb(241, 241, 241);;
       }
    }

        & button:disabled {
      border: 1px solid black;
      background: black;
      color: white;

    }
`;