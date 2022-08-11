import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRight
} from "./FooterElements";
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Learning</FooterLinkTitle>
                {/* <FooterLink to="/">How it works </FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Terms of Services</FooterLink> */}
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Driving School</FooterLinkTitle>
                {/* <FooterLink to="/">How it works </FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Terms of Services</FooterLink> */}
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                {/* <FooterLink to="/">How it works </FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Terms of Services</FooterLink> */}
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>FAQ's</FooterLinkTitle>
                {/* <FooterLink to="/">How it works </FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Terms of Services</FooterLink> */}
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">drively</SocialLogo>
              <WebsiteRight>
                drively ©{new Date().getFullYear()} All rights reserved.
              </WebsiteRight>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
