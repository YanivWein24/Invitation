import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeInBottom = keyframes`
 0% {
    -webkit-transform: translateY(75px);
    transform: translateY(75px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeInRight = keyframes`
 0% {
    -webkit-transform: translateX(75px);
    transform: translateX(75px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
`;

interface FadeInProps {
  delay?: string;
  duration?: string;
  width?: string;
}

export const FadeInRight = styled.div.attrs({
  className: "FadeInRight",
})<FadeInProps>`
  animation: ${fadeInRight} 0.6s ease-in-out both;
  animation-delay: ${({ delay }) => delay || 0};
`;

export const FadeInBottom = styled.div.attrs({
  className: "FadeInBottom",
})<FadeInProps>`
  animation: ${fadeInBottom} 0.6s ease-in-out both;
  animation-delay: ${({ delay }) => delay || 0};
`;

const FadeIn = styled.div.attrs({ className: "FadeIn" })<FadeInProps>`
  animation: ${fadeIn} 0.6s ease-in-out both;
  animation-delay: ${({ delay }) => delay || 0};
  animation-duration: ${({ duration }) => duration};
  width: ${({ width }) => width};
`;

export default FadeIn;
