import { ThemeProvider } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import theme from "@styles/theme";
import topImages, { bottomImages } from "@data/images";
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
} from "@styles/App.styled";
import FadeIn, { FadeInBottom } from "@styles/animations/FadeIn.styled";
import FloatingImage, {
  FloatingImageReversed,
} from "@styles/animations/FloatAround.styled";
import LocationSVG from "@assets/svg/location.svg";
import CalendarSVG from "@assets/svg/calendar.svg";
import ClockSVG from "@assets/svg/clock.svg";
import Soldiers1 from "@assets/images/soldiers1.jpg";
import Soldiers2 from "@assets/images/soldiers2.jpg";
import Soldiers3 from "@assets/images/soldiers3.jpg";
import Soldiers4 from "@assets/images/soldiers4.jpg";
import Soldiers5 from "@assets/images/soldiers5.jpg";
import Soldiers6 from "@assets/images/soldiers6.jpg";
import Soldiers7 from "@assets/images/soldiers7.jpg";
import Soldiers8 from "@assets/images/soldiers8.jpg";

export default function App() {
  const year = new Date().getFullYear();
  const rsvpInfo = [
    {
      text: "מגרש המסדרים בעיר הבה”דים",
      image: LocationSVG,
    },
    {
      text: "יום רביעי 11/10/2023",
      image: CalendarSVG,
    },
    {
      text: "התכנסות 15:00 | תחילת הטקס 16:00",
      image: ClockSVG,
    },
  ];

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
    <ThemeProvider theme={theme}>
      <TopSection>
        {/* do not remove the div */}
        <div>
          {topImages.map(({ src, alt, ...props }, index) => {
            const baseDelay = index % 2 ? 0 : 0;
            return (
              <FadeIn
                key={src}
                width="100%"
                duration="3s"
                delay={`${baseDelay + 0.2 * index}s`}
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
        {/* do not remove the div */}
        <div>
          {bottomImages.map(({ src, alt, ...props }, index) => {
            const baseDelay = index % 2 ? 0 : 0;
            return (
              <FadeIn
                key={src}
                width="100%"
                duration="3s"
                delay={`${baseDelay + 0.2 * index}s`}
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
            {images.map((image) => (
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
