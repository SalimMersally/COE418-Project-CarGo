
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

  import React from 'react';
  import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
  // And react-slick as our Carousel Lib
  import Slider from 'react-slick';
  
  // Settings for the slider
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  export default function SliderComp() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);
  
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });
  
    // These are the images used in the slide
    const cards = [
        img1,
        img2,
        img3
    ];
  
    return (
      <Box
        position={'relative'}
        height={'600px'}
        width={'full'}
        overflow={'hidden'}>
        
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={'6xl'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
    );
  }