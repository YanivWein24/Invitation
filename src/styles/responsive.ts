import { css } from "styled-components";
import theme from "./theme";

type CssParams = Parameters<typeof css>;
const keys = Object.keys(theme.breakpoints) as Array<
  keyof typeof theme.breakpoints
>;

const MaxWidth = keys.reduce((accumulator, label) => {
  accumulator[label] = (...args: CssParams) => {
    return css`
      @media only screen and (max-width: ${theme.breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
  };
  return accumulator;
}, {} as Record<keyof typeof theme.breakpoints, Function>);

export default MaxWidth;

export const MinWidth = keys.reduce((accumulator, label) => {
  accumulator[label] = (...args: CssParams) => {
    return css`
      @media only screen and (min-width: ${theme.breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
  };
  return accumulator;
}, {} as Record<keyof typeof theme.breakpoints, Function>);
