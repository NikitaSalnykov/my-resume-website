import styled from 'styled-components';

export const ScrollIIcon = styled.div`
  opacity: 0.5;
  transition: 0.3s ease-in-out;
  transform: scale(1);
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.4);
  }
`;
