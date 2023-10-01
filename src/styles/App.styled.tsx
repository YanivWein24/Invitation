import styled from "styled-components";
import MaxWidth from "@styles/responsive";
import { FadeInBottom, FadeInRight } from "@styles/animations/FadeIn.styled";

const TopSection = styled.div.attrs({ className: "TopSection" })`
  position: relative;
  width: 100%;
  height: 20rem;
  background-color: ${({ theme }) => theme.colors.body};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  ${MaxWidth.mobileBreakpoint`
    padding: 0 2rem;
    height: 23rem;
  `}
`;

export const BottomSection = styled(TopSection).attrs({
  className: "BottomSection",
})`
  background-color: ${({ theme }) => `${theme.colors.bodyRed}`};
  height: 100%;
  justify-content: flex-start;
  padding-top: 4rem;
`;

export const Header = styled.h1.attrs({ className: "Header" })`
  text-align: center;
  color: ${({ theme }) => theme.colors.brown};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.header};
  ${MaxWidth.mobileBreakpoint`
    font-size: 50px;
  `}
`;

export const SubHeader = styled.h3.attrs({ className: "SubHeader" })`
  color: ${({ theme }) => theme.colors.brown};
  font-size: ${({ theme }) => theme.fontSizes.subHeader};
`;

export const StyledHR = styled.hr.attrs({ className: "styledHR" })`
  width: 200px;
  height: 2px;
  background-color: ${({ theme }) => `${theme.colors.brown}`};
  border: none;
`;

export const Paragraph = styled.p.attrs({ className: "Paragraph" })`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.fontSizes.subHeader};
  max-width: 200px;
`;

export const ParagraphsContainer = styled.div.attrs({
  className: "ParagraphsContainer",
})`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ParagraphFlex = styled(FadeInRight).attrs({
  className: "ParagraphFlex",
})`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const CarouselContainer = styled(FadeInBottom).attrs({
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

export const Footer = styled.p.attrs({
  className: "Footer",
})`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.yellow};
  margin: 5rem 0 1rem;
  direction: ltr;

  ${MaxWidth.mobileBreakpoint`
    font-size: 12px;
  `}
`;

export default TopSection;
