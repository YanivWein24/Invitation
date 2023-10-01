import { ThemeProvider } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import theme from "@styles/theme";
import FadeInBottom from "@styles/animations/FadeIn.styled";
import LocationSVG from "@assets/svg/location.svg";
import CalendarSVG from "@assets/svg/calendar.svg";
import Soldiers1 from "@assets/images/soldiers1.jpg";
import Soldiers2 from "@assets/images/soldiers2.jpg";
import Soldiers3 from "@assets/images/soldiers3.jpg";
import Soldiers4 from "@assets/images/soldiers4.jpg";
import ClockSVG from "@assets/svg/clock.svg";
import Image1 from "@assets/svg/topSection/1.svg";
import Image2 from "@assets/svg/topSection/2.svg";
import Image3 from "@assets/svg/topSection/3.svg";
import Image4 from "@assets/svg/topSection/4.svg";
import TopSection, {
  BottomSection,
  CarouselContainer,
  Footer,
  Header,
  Paragraph,
  ParagraphFlex,
  ParagraphsContainer,
  StyledHR,
  SubHeader,
} from "./App.styled";
import FloatingImage, {
  FloatingImageProps,
  FloatingImageReversed,
} from "@styles/animations/FloatAround.styled";

interface FloatingImages extends FloatingImageProps {
  src: string;
  alt: string;
}

export default function App() {
  const year = new Date().getFullYear();
  const rsvpInfo = [
    {
      text: "רחבת הטקסים בעיר הבה”דים",
      image: LocationSVG,
    },
    {
      text: "יום רביעי 11/10/2023",
      image: CalendarSVG,
    },
    {
      text: "16:00",
      image: ClockSVG,
    },
  ];

  const images: FloatingImages[] = [
    {
      src: Image2,
      alt: Image2,
      rotation: "10deg",
      right: "3rem",
      mobileRight: "1rem",
      duration: "7s",
    },
    {
      src: Image1,
      alt: Image1,
      width: "25px",
      height: "25px",
      top: "10rem",
      right: "15%",
      mobileRight: "10%",
      duration: "9s",
    },
    {
      src: Image3,
      alt: Image3,
      width: "35px",
      height: "35px",
      mobileLeft: "12px",
    },
    {
      src: Image4,
      alt: Image4,
      left: "15%",
      top: "13rem",
      mobileLeft: "1rem",
      mobileTop: "17rem",
      reverse: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <TopSection>
        {images.map(({ src, alt, ...props }, index) =>
          index === 1 || index % 2 ? (
            <FloatingImage key={src} src={src} alt={alt} {...props} />
          ) : (
            <FloatingImageReversed key={src} src={src} alt={alt} {...props} />
          )
        )}
        <FadeInBottom>
          <SubHeader>אנו מתכבדים להזמינכם אל</SubHeader>
        </FadeInBottom>
        <FadeInBottom delay="0.1s">
          <Header>
            טקס סיום
            <br />
            השלמת קאר&quot;ים &apos;עבד&apos;
          </Header>
        </FadeInBottom>
        <FadeInBottom delay="0.2s">
          <StyledHR />
        </FadeInBottom>
      </TopSection>
      <BottomSection>
        <ParagraphsContainer>
          {rsvpInfo.map((info, index) => (
            <ParagraphFlex key={info.text} delay={`${0.5 + 0.2 * index}s`}>
              <img src={info.image} alt="location" width={30} />
              <Paragraph>{info.text}</Paragraph>
            </ParagraphFlex>
          ))}
        </ParagraphsContainer>
        <CarouselContainer>
          <Carousel showArrows infiniteLoop autoPlay interval={4000}>
            {[Soldiers1, Soldiers2, Soldiers3, Soldiers4].map((image) => (
              <img
                key={image}
                src={image}
                alt={image}
                style={{ maxHeight: "450px" }}
              />
            ))}
          </Carousel>
        </CarouselContainer>
        <Footer>© {year} Yaniv Weinshtein</Footer>
      </BottomSection>
    </ThemeProvider>
  );
}
