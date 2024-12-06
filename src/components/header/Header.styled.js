import styled from 'styled-components';

export const CustomHeader = styled.header`
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const LanguageSwitcher = styled.header`
  display: flex;
  position: absolute;
  flex-direction: row;
  top: 10px;
  right: 20px; 

& div {

      padding: 4px;
}
`;

export const LanguageButton = styled.button`
  font-weight: ${(props) => (props.isActive ? '600' : '400')}; /* font-semibold, если активен */
  opacity: ${(props) => (props.isActive ? '1' : '0.75')}; /* opacity-75, если не активен */
`;

export const HeaderContainer = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  overflow: 'hidden';
  display: flex;
  justify-content: center;
  gap: 10px;

  background-color: #1e1e1e;
  color: white;
  border-radius: 20px;

  @media screen and (min-width: 375px) {
    padding-left: 20px;
    padding-right: 20px;
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    gap: 60px;
  }
  @media screen and (min-width: 1200px) {
  }

  & a {
    position: absolute;
    bottom: 10px;
    right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    opacity: 0.5;
    transition: 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Photo = styled.div`
  & img {
    display: block;
    max-width: 150px;
    border-radius: 50%;
    /* filter: grayscale(1); */
  }
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(24 / 18);
  letter-spacing: 0.03em;
  text-align: start;

  & p {
    @media screen and (min-width: 375px) {
      font-size: 14x;
    }
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 20px;
    }
  }
  & h1 {
    font-size: 18px;
    line-height: calc(1);
    margin-bottom: 10px;

    @media screen and (min-width: 375px) {
      font-size: 28px;
    }
    @media screen and (min-width: 768px) {
      font-size: 34px;
      margin-bottom: 14px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 48px;
    }
  }
`;
