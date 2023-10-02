import styled from "styled-components";
import MaxWidth from "@styles/responsive";

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
