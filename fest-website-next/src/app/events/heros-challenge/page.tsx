import { HeroChlng, HerosChallengeBg } from "../../../assets";
import EventCategory from "../EventCategory";
import { heroevent } from "../../../constants/generate_data";

function HerosChallenge() {
  return (
    <>
      <EventCategory
        bgImg={HerosChallengeBg}
        heading="Heroe's Challenge"
        img={HeroChlng}
        events={heroevent}
      />
    </>
  );
}

export default HerosChallenge;
