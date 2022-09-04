import styled from 'styled-components';
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { AR } from 'country-flag-icons/react/3x2'

const Container = styled.div`
    margin-bottom: 200px;
    height: 100%;
    padding: 20px;
    display:flex; 
    justify-content: start;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 5;
    border-radius: 15px;  
    border: 2px solid rgb(4, 93, 152);
    box-shadow: inset 0 0 5px white;

    @media (max-width: 1050px) {

    }

    @media (max-width: 500px) {
      flex-direction: column;
      background-color: transparent;
      border: none;
      box-shadow: 0 0;
    }
`

const Title = styled.h1`
margin-right: -10px;
padding: 0 0 80px 0;
letter-spacing: -50px;
writing-mode: vertical-lr;
text-orientation: upright;
color: rgb(4, 93, 152, 0.4);
font-size: 110px;
font-weight: bold;
z-index: 1;

@media (max-width: 1050px) {
  margin: 0;
}

@media (max-width: 500px) {
  padding-right: 30px;
  letter-spacing: 0;
  letter-spacing: 0;
  writing-mode: inherit;
  text-orientation: inherit;
  padding-bottom: 0;
  font-size: 80px;
  margin-bottom: 30px;
}
`

const Title2 = styled.h1`
margin: 20px 0px 0px 20px;
color: rgb(4, 93, 152, 0.4);
font-size: 110px;
font-weight: bold;
z-index: 1;

@media (max-width: 1050px) {

}

@media (max-width: 500px) {
  display: none;
}
`

const DescriptionContainer = styled.div`
padding-bottom: 80px;
color: white;
display: flex;
flex-direction: columns;
justify-content: center;
align-items: start;
flex-direction: column;
z-index: 2;


@media (max-width: 500px) {

}
`
const Description = styled.span`
margin: 10px;
font-size: 18px;

@media (max-width: 500px) {
  margin: 0;
}
`

const Strong = styled.span`
font-weight: bold;
font-size: 18px;
color: rgb(4, 93, 152, 0.7);

@media (max-width: 500px) {
  margin: 0;
}
`



const AboutMe = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-out-sine',
      delay: 100,
    })
    window.addEventListener('load', AOS.refresh)
  },)


  return (
      <Container className="container" id="aboutMe">
          <div className="row">
              <Title data-aos="fade-up" data-aos-anchor-placement="top-center">ABOUT</Title>
          </div>
          <DescriptionContainer className="row">
              <Title2 data-aos="fade-right" data-aos-anchor-placement="top-center">ME</Title2>
              <Description>Im from <Strong>Argentina</Strong> <AR className="flag"/>, but i want to relocate eventually.</Description>
              <Description>I've a degree in <Strong>business administration and accounting</Strong> and i've been <Strong>working in the field since 2017.</Strong></Description>
              <Description>I started learning Development at the end of 2021, and i enjoyed it a lot! So im looking to switch my career path.</Description>
              <Description>I am a <Strong>quick learner, problem solver, i'm curious and i've leadership experience from previous jobs.</Strong></Description>
          </DescriptionContainer>
      </Container>
  )
};

export default AboutMe;