import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
 
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
 
} from "./CardElements";

import { Button } from "../ButtonElement";

const CardSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg></HeroBg>
        <HeroContent>
          <HeroH1>Upgrade Your Learning Process Today With DRIVELY</HeroH1>
          <HeroP>You and your friends will love it! We promise.</HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="false"
            >
              Register Now  
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default CardSection;
