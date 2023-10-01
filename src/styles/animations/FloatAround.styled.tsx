import styled, { keyframes } from "styled-components";
import MaxWidth from "./../responsive";

const floatUpDown = keyframes`
 0% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
  50% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
  }
  100% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
`;

const floatUpDownReverse = keyframes`
 0% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
  }
  50% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
  100% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
  }
`;

export interface FloatingImageProps {
  width?: string;
  height?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  mobileTop?: string;
  mobileBottom?: string;
  mobileLeft?: string;
  mobileRight?: string;
  rotation?: string;
  duration?: string;
  reverse?: boolean;
}

const FloatingImage = styled.img.attrs({
  className: "FloatingImage",
})<FloatingImageProps>`
  animation: ${floatUpDown} 6s ease-in-out infinite;
  animation-duration: ${({ duration }) => duration && duration};
  width: ${({ width }) => width ?? "30px"};
  height: ${({ height }) => height ?? "30px"};
  opacity: 0.35;
  position: absolute;
  top: ${({ top, bottom }) => top || (!bottom && "2rem")};
  bottom: ${({ bottom }) => bottom && bottom};
  left: ${({ left, right }) => left || (!right && "2rem")};
  right: ${({ right }) => right && right};
  transform-origin: center;
  ${({ rotation }) => (rotation ? `rotate: ${rotation};` : "rotate: -10deg;")}

  ${MaxWidth.mobileBreakpoint`
    top: ${({ mobileTop }: FloatingImageProps) =>
      mobileTop && `${mobileTop} !important`};
    bottom: ${({ mobileBottom }: FloatingImageProps) =>
      mobileBottom && `${mobileBottom} !important`};
    left: ${({ mobileLeft }: FloatingImageProps) =>
      mobileLeft && `${mobileLeft} !important`};
    right: ${({ mobileRight }: FloatingImageProps) =>
      mobileRight && `${mobileRight} !important`};
  `}
`;

export const FloatingImageReversed = styled(FloatingImage).attrs({
  className: "FloatingImageReversed",
})`
  animation: ${floatUpDownReverse} 6s ease-in-out infinite;
  animation-duration: ${({ duration }) => duration && duration};
`;

export default FloatingImage;
