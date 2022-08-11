import React from 'react' 
import { Button } from  '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2,  TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img, BtnWrap } from './HeroElements'
 
 
const HeroSection1 = ({lightBg, id, imgStart, topLine,
    lightText, headline, darkText, description, buttonLabel , img, alt,
    primary, dark, dark2, headline2}) => {
  return (
    <>
    <InfoContainer lightBg = {lightBg}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine} </TopLine>
                        <Heading lightText={lightText}> {headline}</Heading>
                        <Heading lightText={lightText}> {headline2}</Heading>
                        <BtnWrap>
                             <Button to='home'
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact="true"
                             offset={-80}
                             primary={primary ? 1:0}
                             dark={dark ? 1:0}
                             dark2 = {dark2? 1:0}
                             >{buttonLabel}</Button>
                        </BtnWrap> 
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
 </>
  )
}

export default HeroSection1


