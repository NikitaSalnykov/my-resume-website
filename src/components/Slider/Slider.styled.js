import styled from 'styled-components';

export const SliderContainer = styled.div`
position: relative;

& svg {
   position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  background-color: black;
  border-radius: 50%;
  fill: white;
  cursor: pointer;
  transition: 0.3s ease;
  opacity: 0.8;
 &:hover {
  transform: scale(1.1);
  opacity: 1;
}
}
`;
