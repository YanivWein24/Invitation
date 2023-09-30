import { FadeInRight } from "@styles/Animations.styled";
import MaxWidth from "@styles/responsive";
import styled from "styled-components";

const TopSection = styled.div.attrs({ className: "TopSection" })`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.body};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: 20rem;

  ${MaxWidth.mobileBreakpoint`
    padding: 0 2rem;
    height: 23rem;
  `}
`;

export const BottomSection = styled(TopSection).attrs({
  className: "BottomSection",
})`
  background-color: ${({ theme }) => `${theme.colors.bodyRed}`};
  min-height: calc(100vh - 20rem);
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

export const MainImage = styled.img.attrs({
  className: "MainImage",
})`
  max-width: 100%;
`;

export default TopSection;
