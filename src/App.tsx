import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import TopSection, {
  BottomSection,
  Header,
  MainImage,
  Paragraph,
  ParagraphFlex,
  ParagraphsContainer,
  StyledHR,
  SubHeader,
} from "./App.styled";
import FadeInBottom from "@styles/Animations.styled";
import LocationSVG from "@assets/svg/location.svg";
import CalendarSVG from "@assets/svg/calendar.svg";
import SoldiersImage from "@assets/images/soldiers1.jpg";
import ClockSVG from "@assets/svg/clock.svg";

export default function App() {
  const RSVP_info = [
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
            השלמת קאר"ים 'עבד'
          </Header>
        </FadeInBottom>
        <FadeInBottom delay="0.2s">
          <StyledHR />
        </FadeInBottom>
      </TopSection>
      <BottomSection>
        <ParagraphsContainer>
          {RSVP_info.map((info, index) => (
            <ParagraphFlex key={info.text} delay={`${0.5 + 0.2 * index}s`}>
              <img src={info.image} alt="location" width={30} />
              <Paragraph>{info.text}</Paragraph>
            </ParagraphFlex>
          ))}
        </ParagraphsContainer>
        <MainImage src={SoldiersImage} alt="soldiers" />
      </BottomSection>
    </ThemeProvider>
  );
}
