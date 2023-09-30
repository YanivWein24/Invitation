import styled, { keyframes } from "styled-components";

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
}

export const FadeInRight = styled.div<FadeInProps>`
  animation: ${fadeInRight} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation-delay: ${({ delay }) => delay || 0};
`;

const FadeInBottom = styled.div<FadeInProps>`
  animation: ${fadeInBottom} 0.5s ease-in-out both;
  animation-delay: ${({ delay }) => delay || 0};
`;

export default FadeInBottom;
