import MaxWidth from "@styles/responsive";
import styled from "styled-components";

const Header = styled.h1.attrs({ className: "Header" })`
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

export default Header;
