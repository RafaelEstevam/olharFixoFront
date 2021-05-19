import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCustomCarousel = styled(Carousel)`
  .carousel-inner {
    max-width: 400px !important;
  }
`;

const CustomCarouselItem = styled(Carousel.Item)`
  padding: 0px 15px;
  min-width: 100%;
`;

export function CustomCarousel({ children, activeIndex }) {
  return (
    <StyledCustomCarousel
      interval={null}
      controls={false}
      indicators={false}
      activeIndex={activeIndex}
    >
      {children.length > 0 ? (
        children?.map((item, index) => (
          <CustomCarouselItem key={index}>
            {item.props.children}
          </CustomCarouselItem>
        ))
      ) : (
        <CustomCarouselItem>{children.props.children}</CustomCarouselItem>
      )}
    </StyledCustomCarousel>
  );
}
