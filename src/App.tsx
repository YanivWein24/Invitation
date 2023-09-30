import { ThemeProvider } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import theme from "@styles/theme";
import FadeInBottom from "@styles/Animations.styled";
import LocationSVG from "@assets/svg/location.svg";
import CalendarSVG from "@assets/svg/calendar.svg";
import Soldiers1 from "@assets/images/soldiers1.jpg";
import Soldiers2 from "@assets/images/soldiers2.jpg";
import Soldiers3 from "@assets/images/soldiers3.jpg";
import ClockSVG from "@assets/svg/clock.svg";
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

  return (
    <ThemeProvider theme={theme}>
      <TopSection>
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
            <ParagraphFlex key={info.text} delay={`${0.7 + 0.2 * index}s`}>
              <img src={info.image} alt="location" width={30} />
              <Paragraph>{info.text}</Paragraph>
            </ParagraphFlex>
          ))}
        </ParagraphsContainer>
        <CarouselContainer>
          <Carousel showArrows infiniteLoop autoPlay interval={4000}>
            {[Soldiers1, Soldiers2, Soldiers3].map((image) => (
              <img
                key={image}
                src={image}
                alt={image}
                style={{ maxHeight: "300px" }}
              />
            ))}
          </Carousel>
        </CarouselContainer>
        <Footer>©{year} Yaniv Weinshtein</Footer>
      </BottomSection>
    </ThemeProvider>
  );
}
