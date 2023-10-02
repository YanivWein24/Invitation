import { FadeInBottom } from "@styles/animations/FadeIn.styled";
import Header, { StyledHR, SubHeader } from "./Intro.styled";

export default function Intro() {
  return (
    <>
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
    </>
  );
}
