import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcon, SocialIconLink } from "./FooterElements";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">Join us</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Clients</FooterLink>
              <FooterLink to="/">Term of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Join us</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Clients</FooterLink>
              <FooterLink to="/">Term of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Join us</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Clients</FooterLink>
              <FooterLink to="/">Term of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Join us</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Clients</FooterLink>
              <FooterLink to="/">Term of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Anaphalis
            </SocialLogo>
            <WebsiteRights>dave_id @copyright {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcon>
              <SocialIconLink href="/" target="_blank" aria-label="twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
