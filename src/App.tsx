import { ThemeProvider } from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import topImages, { bottomImages } from "@data/images";
import FloatingImages from "@components/FloatingImages/FloatingImages";
import Intro from "@components/Intro/Intro";
import Rsvp from "@components/Rsvp/Rsvp";
import Carousel from "@components/Carousel/Carousel";
import theme from "@styles/theme";
import TopSection, { BottomSection, Footer } from "@styles/App.styled";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopSection>
        <FloatingImages images={topImages} />
        <Intro />
      </TopSection>
      <BottomSection>
        <FloatingImages images={bottomImages} />
        <Rsvp />
        <Carousel />
        <Footer>© {new Date().getFullYear()} Yaniv Weinshtein</Footer>
      </BottomSection>
    </ThemeProvider>
  );
}
