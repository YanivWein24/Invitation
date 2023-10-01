import { FloatingImageProps } from "@styles/animations/FloatAround.styled";
import TopImage1 from "@assets/svg/topSection/1.svg";
import TopImage2 from "@assets/svg/topSection/2.svg";
import TopImage3 from "@assets/svg/topSection/3.svg";
import TopImage4 from "@assets/svg/topSection/4.svg";
import TopImage5 from "@assets/svg/topSection/5.svg";
import TopImage6 from "@assets/svg/topSection/6.svg";
import BottomImage1 from "@assets/svg/bottomSection/1.svg";
import BottomImage2 from "@assets/svg/bottomSection/2.svg";
import BottomImage3 from "@assets/svg/bottomSection/3.svg";
import BottomImage4 from "@assets/svg/bottomSection/4.svg";
import BottomImage5 from "@assets/svg/bottomSection/5.svg";
import BottomImage6 from "@assets/svg/bottomSection/6.svg";

interface FloatingImages extends FloatingImageProps {
  src: string;
  alt: string;
}

const topImages: FloatingImages[] = [
  {
    src: TopImage2,
    alt: TopImage2,
    width: "30px",
    height: "30px",
    rotation: "10deg",
    right: "3rem",
    mobileRight: "1rem",
    duration: "25s",
  },
  {
    src: TopImage1,
    alt: TopImage1,
    top: "10rem",
    right: "15%",
    mobileRight: "10%",
    duration: "17s",
  },
  {
    src: TopImage3,
    alt: TopImage3,
    mobileLeft: "2rem",
  },
  {
    src: TopImage4,
    alt: TopImage4,
    width: "30px",
    height: "30px",
    left: "15%",
    top: "13rem",
    mobileLeft: "1rem",
    mobileTop: "17rem",
  },
  {
    src: TopImage5,
    alt: TopImage5,
    width: "35px",
    height: "35px",
    left: "40%",
    bottom: "1.5rem",
    rotation: "15deg",
    duration: "17s",
  },
  {
    src: TopImage6,
    alt: TopImage6,
    width: "30px",
    height: "30px",
    right: "40%",
    top: "1rem",
    duration: "17s",
  },
];

export const bottomImages: FloatingImages[] = [
  {
    src: BottomImage2,
    alt: BottomImage2,
    width: "30px",
    height: "30px",
    rotation: "10deg",
    right: "3rem",
    mobileRight: "1rem",
    duration: "25s",
  },
  {
    src: BottomImage1,
    alt: BottomImage1,
    top: "10rem",
    right: "15%",
    mobileRight: "9%",
    duration: "17s",
  },
  {
    src: BottomImage3,
    alt: BottomImage3,
    left: "5rem",
    mobileLeft: "1rem",
  },
  {
    src: BottomImage4,
    alt: BottomImage4,
    width: "30px",
    height: "30px",
    left: "15%",
    top: "13rem",
    mobileTop: "14rem",
    mobileLeft: "1rem",
    rotation: "-15deg",
  },
  {
    src: BottomImage5,
    alt: BottomImage5,
    rotation: "10deg",
    bottom: "10rem",
    mobileBottom: "6rem",
    duration: "25s",
  },
  {
    src: BottomImage6,
    alt: BottomImage6,
    width: "35px",
    height: "35px",
    bottom: "4rem",
    right: "10rem",
    mobileRight: "5rem",
    duration: "17s",
  },
];

export default topImages;
