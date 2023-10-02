import { FadeInRight } from "@styles/animations/FadeIn.styled";
import styled from "styled-components";

const Paragraph = styled.p.attrs({ className: "Paragraph" })`
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

export default Paragraph;
