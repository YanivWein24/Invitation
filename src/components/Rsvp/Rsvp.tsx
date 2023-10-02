import LocationSVG from "@assets/svg/location.svg";
import CalendarSVG from "@assets/svg/calendar.svg";
import ClockSVG from "@assets/svg/clock.svg";
import Paragraph, { ParagraphFlex, ParagraphsContainer } from "./Rsvp.styled";

export default function Rsvp() {
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

  return (
    <ParagraphsContainer>
      {rsvpInfo.map((info, index) => (
        <ParagraphFlex key={info.text} delay={`${0.5 + 0.2 * index}s`}>
          <img src={info.image} alt="location" width={30} />
          <Paragraph>{info.text}</Paragraph>
        </ParagraphFlex>
      ))}
    </ParagraphsContainer>
  );
}
