import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { ScrollIIcon } from './Scroll.styled';

export const Scroll = () => {
  return (
    <ScrollToTop
      showUnder={900}
      style={{
        position: 'fixed',
        bottom: 50,
        right: 30,
        cursor: 'pointer',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s',
      }}
      duration={900}
    >
      <ScrollIIcon>
        <IoIosArrowDropupCircle size={48} />
      </ScrollIIcon>
    </ScrollToTop>
  );
};
