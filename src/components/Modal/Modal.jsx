import { useEffect, useContext } from 'react';
import { Context } from 'components/App';
import { ModalContainer, Overlay } from './Modal.style';
import { Container } from 'components/Resume.styled';

export const Modal = ({ image }) => {
  const context = useContext(Context);

  useEffect(() => {
    const handleCloseModal = e => {
      if (e.key === 'Escape') {
        context.close();
      }
    };
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [context]);

  return (
    <Container>
       <Overlay onClick={() => context.close()}>
      <ModalContainer>
        <img
          src={process.env.PUBLIC_URL + image} 
          alt='large'
        />
      </ModalContainer>
    </Overlay>
   </Container>
  );
};
