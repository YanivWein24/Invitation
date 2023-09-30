import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import SoldiersImage from "@assets/images/soldiers1.jpg";
import TopSection, {
  BottomSection,
  Header,
  Paragraph,
  ParagraphFlex,
  ParagraphsContainer,
  StyledHR,
  SubHeader,
} from "./App.styled";
import LocationSVG from "@assets/svg/location.svg";
import CalendarSVG from "@assets/svg/calendar.svg";
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
        <SubHeader>אנו מתכבדים להזמינכם אל</SubHeader>
        <Header>
          טקס סיום
          <br />
          השלמת קאר"ים 'עבד'
        </Header>
        <StyledHR />
      </TopSection>
      <BottomSection>
        <ParagraphsContainer>
          {RSVP_info.map((info) => (
            <ParagraphFlex key={info.text}>
              <img src={info.image} alt="location" width={30} />
              <Paragraph>{info.text}</Paragraph>
            </ParagraphFlex>
          ))}
        </ParagraphsContainer>
        <img src={SoldiersImage} alt="soldiers" width={350} />
      </BottomSection>
    </ThemeProvider>
  );
}
