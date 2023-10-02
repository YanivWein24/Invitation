import { FadeInBottom } from "@styles/animations/FadeIn.styled";
import MaxWidth from "@styles/responsive";
import styled from "styled-components";

const CarouselContainer = styled(FadeInBottom).attrs({
  className: "CarouselContainer",
  delay: "1.5s",
  duration: "1.5s",
})`
  direction: ltr; // the carousel won't work with 'rtl' direction
  max-width: 800px;
  height: max-content;
  margin-top: 3rem;

  .carousel-status {
    display: none;
  }
  .carousel .thumb {
    border: 2px solid ${({ theme }) => theme.colors.yellow};
  }
  .carousel .thumb.selected {
    border: 3px solid #333;
  }

  ${MaxWidth.mobileBreakpoint`
      width:100vw;
      padding: 0 6px;
  
      img {
        max-height: 300px !important;
      }
    `}
`;

export default CarouselContainer;
