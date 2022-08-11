import React from "react";
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3  from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2,ServicesP1 , ServicesP  } from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Hear from our users</ServicesH1>
        <ServicesP1>Don’t take our word for it. Trust our customers.</ServicesP1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}></ServicesIcon>
            <ServicesH2>Naman Jain</ServicesH2>
            <ServicesP>"They taught me everything about driving. I can now confidently use the half-clutch technique. Thanks to Drively. "</ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon2}></ServicesIcon>
            <ServicesH2>Ankita Soni</ServicesH2>
            <ServicesP>"Through Drively, I found an Instructor near me and I regained my confidence in driving. I highly recommend Drively."</ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon3}></ServicesIcon>
            <ServicesH2>Goutam Chhikara</ServicesH2>
            <ServicesP>"I found an Instructor near me within no time and now I started to drive confidently. Kudos to the team!"</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
