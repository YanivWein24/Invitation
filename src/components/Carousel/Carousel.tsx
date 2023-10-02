import { Carousel as ReactCarousel } from "react-responsive-carousel";
import Soldiers1 from "@assets/images/soldiers1.jpg";
import Soldiers2 from "@assets/images/soldiers2.jpg";
import Soldiers3 from "@assets/images/soldiers3.jpg";
import Soldiers4 from "@assets/images/soldiers4.jpg";
import Soldiers5 from "@assets/images/soldiers5.jpg";
import Soldiers6 from "@assets/images/soldiers6.jpg";
import Soldiers7 from "@assets/images/soldiers7.jpg";
import Soldiers8 from "@assets/images/soldiers8.jpg";
import CarouselContainer from "./Carousel.styled";

export default function Carousel() {
  const images = [
    Soldiers1,
    Soldiers2,
    Soldiers3,
    Soldiers4,
    Soldiers5,
    Soldiers6,
    Soldiers7,
    Soldiers8,
  ];

  return (
    <CarouselContainer>
      <ReactCarousel showArrows infiniteLoop autoPlay interval={3000}>
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt={image}
            style={{ maxHeight: "450px" }}
          />
        ))}
      </ReactCarousel>
    </CarouselContainer>
  );
}
