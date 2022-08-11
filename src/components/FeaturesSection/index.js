import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroP2,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./FeatureElements";

import { Button } from "../ButtonElement";

const FeatureSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg></HeroBg>

        <HeroContent>
          <HeroP2>Features</HeroP2>
          <HeroH1>Why Drively?</HeroH1>
          <HeroP>
            The first data-driven driving platform in India for the future
            generation of instructors and students.
          </HeroP>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default FeatureSection;
