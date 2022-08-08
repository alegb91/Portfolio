import styled from 'styled-components';
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { AR } from 'country-flag-icons/react/3x2'

const Container = styled.div`
padding-top: 200px;
margin-bottom: 200px;
    height: 70vh;
    position: relative;
    padding: 20px;
    display:flex; 
    justify-content: start;
    align-items: center;

    @media (max-width: 500px) {
      border-top: none;
      padding-top: 30px;
    }
`

const Title = styled.h1`
position: absolute;
writing-mode: vertical-lr;
text-orientation: upright;
color: rgb(4, 93, 152, 0.4);
font-size: 80px;
font-weight: bold;
top: 0px;
left: 150px;
z-index: 1;

@media (max-width: 500px) {
  writing-mode: inherit;
  text-orientation: inherit;
  position: relative;
  top: 0px;
  left: 0px;
  padding-left: 0px;
  margin: 20px 0px 0px 0px;
}
`

const DescriptionContainer = styled.div`
color: #fbfef9;
position: relative;
display: flex;
flex-direction: columns;
justify-content: center;
align-items: start;
flex-direction: column;
padding: 100px 150px 0px 40px;
z-index: 2;

@media (max-width: 500px) {
  padding-top: 10px;
  padding-left: 0px;
  padding-right: 0px;
}
`
const Description = styled.span`
margin: 10px;
`

const Strong = styled.span`
font-weight: bold;
font-size: 17px;
color: rgb(4, 93, 152);
text-shadow: -0.1px 0 black, 0 0.1px black, 0.1px 0 black, 0 -0.1px black;
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
          <div className="col">
        <Title data-aos="fade-up" data-aos-anchor-placement="top-center">ABOUT ME</Title>
        <DescriptionContainer>
            <Description>Im from <Strong>Argentina</Strong> <AR className="flag"/>, but i want to relocate eventually. I've a degree in <Strong>business administration and accounting</Strong> and i've been working in the field for the <Strong>last 5 years.</Strong></Description>
            <Description>I started learning Front-End Development last year, and i enjoyed it a lot! So im looking to switch my career path.</Description>
            <Description>I am a <Strong>quick learner, problem solver, i'm curious and i've some leadership experience from previous jobs.</Strong></Description>
            <Description>In my free time i enjoy sports such as <Strong>football and mountain climbing </Strong>and i also play videogames from time to time.</Description>
</DescriptionContainer>
        </div>
        </div>
    </Container>
  )
}

export default AboutMe;