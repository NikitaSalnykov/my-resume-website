import React, { useContext } from 'react';
import SimpleSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderContainer } from './Slider.styled';
import { Context } from 'components/App';
import { MdZoomOutMap } from 'react-icons/md';

export const Slider = ({ images, title }) => {
  const context = useContext(Context);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <SimpleSlider {...settings}>
        <SliderContainer>
          <MdZoomOutMap onClick={() => context.open(images.img1)} />
          <img src={process.env.PUBLIC_URL + images.img1} alt={`${title}-1`} />
        </SliderContainer>
        <SliderContainer>
          <MdZoomOutMap onClick={() => context.open(images.img2)} />
          <img src={process.env.PUBLIC_URL + images.img2} alt={`${title}-2`} />
        </SliderContainer>
        <SliderContainer>
          <MdZoomOutMap onClick={() => context.open(images.img3)} />
          <img src={process.env.PUBLIC_URL + images.img3} alt={`${title}-3`} />
        </SliderContainer>
      </SimpleSlider>
    </div>
  );
};
