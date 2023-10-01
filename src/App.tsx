import { ThemeProvider } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import theme from "@styles/theme";
import FadeIn, { FadeInBottom } from "@styles/animations/FadeIn.styled";
import LocationSVG from "@assets/svg/location.svg";
import CalendarSVG from "@assets/svg/calendar.svg";
import Soldiers1 from "@assets/images/soldiers1.jpg";
import Soldiers2 from "@assets/images/soldiers2.jpg";
import Soldiers3 from "@assets/images/soldiers3.jpg";
import Soldiers4 from "@assets/images/soldiers4.jpg";
import ClockSVG from "@assets/svg/clock.svg";
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
import FloatingImage, {
  FloatingImageProps,
  FloatingImageReversed,
} from "@styles/animations/FloatAround.styled";
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

  const bottomImages: FloatingImages[] = [
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
      bottom: "4rem",
      right: "10rem",
      mobileRight: "5rem",
      duration: "25s",
    },
    {
      src: BottomImage6,
      alt: BottomImage6,
      width: "35px",
      height: "35px",
      bottom: "10rem",
      mobileBottom: "6rem",
      duration: "17s",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <TopSection>
        <div>
          {topImages.map(({ src, alt, ...props }, index) => {
            const baseDelay = index % 2 ? 0.8 : 1.2;
            return (
              <FadeIn
                delay={`${baseDelay + 0.2 * index}s`}
                width="100%"
                duration="3s"
                key={src}
              >
                {index === 1 || index % 2 ? (
                  <FloatingImage src={src} alt={alt} {...props} />
                ) : (
                  <FloatingImageReversed src={src} alt={alt} {...props} />
                )}
              </FadeIn>
            );
          })}
        </div>

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
        <div>
          {bottomImages.map(({ src, alt, ...props }, index) => {
            const baseDelay = index % 2 ? 0.8 : 1.2;
            return (
              <FadeIn
                delay={`${baseDelay + 0.2 * index}s`}
                width="100%"
                duration="3s"
              >
                {index === 1 || index % 2 ? (
                  <FloatingImage key={src} src={src} alt={alt} {...props} />
                ) : (
                  <FloatingImageReversed
                    key={src}
                    src={src}
                    alt={alt}
                    {...props}
                  />
                )}
              </FadeIn>
            );
          })}
        </div>

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
