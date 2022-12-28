import styled from 'styled-components';
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faCss3, 
  faGitAlt, 
  faGithub, 
  faHtml5, 
  faJs, 
  faNodeJs, 
  faReact } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import mongodb from "../images/Toolbox-icons/mongodb.png";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    min-height: 85vh;
    display:flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    z-index: 5; 
    transition: all 0.5s ease-in-out;
    width: 100vw;

    @media (max-width: 500px) {
      flex-direction: column;
      background-color: transparent;
      border: none;
      box-shadow: 0 0;
    }
`

const Title = styled.h1`
color: white;
font-size: 80px;
font-weight: bold;

@media (max-width: 800px) {
  font-size: 70px;
  padding-left: 5px;
}

@media (max-width: 500px) {
  font-size: 60px;
}
`

const DescriptionContainer = styled.div`
color: white;
display: flex;
flex-direction: columns;
justify-content: center;
align-items: start;
flex-direction: column;
z-index: 2;

@media (max-width: 1000px) {
  margin-top: 70px;
}
`
const Description = styled.span`
margin: 10px;
font-size: 21px;
font-family: 'BenchNine', sans-serif;
word-spacing: 3px;

@media (max-width: 1000px) {
  font-size: 18px;
}

@media (max-width: 700px) {
  margin: 0;
}
`

const Strong = styled.span`
font-weight: bold;
font-size: 21px;
color: rgb(0, 160, 255, 0.7);
font-family: 'BenchNine', sans-serif;
word-spacing: 3px;

@media (max-width: 800px) {
  font-size: 18px;
}

@media (max-width: 500px) {
  margin: 0;
}
`

const Icon = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin: 20px;
`

const Name = styled.span`
margin-top: 10px;
color: #fbfef9;
`;

const Img = styled.img`
color: #fbfef9;
height: 50px;
width: 50px;
align-text: center;
`;


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
          <DescriptionContainer className="row">
              <Title data-aos="fade-right" data-aos-anchor-placement="top-center">ABOUT ME</Title>
              <Description>Im from <Strong>Argentina</Strong>, but i want to relocate eventually.</Description>
              <Description>I've a degree in <Strong>business administration and accounting</Strong> and i've been <Strong>working in the field since 2017.</Strong></Description>
              <Description>I started learning Development at the end of 2021, and i enjoyed it a lot! So im looking to switch my career path.</Description>
              <Description>I am a <Strong>quick learner, problem solver, i'm curious and i've leadership experience from previous jobs.</Strong></Description>
          </DescriptionContainer>
            <div className="pt-5 d-flex justify-content-around flex-wrap">
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faHtml5}/>
                <Name>HTML</Name>
            </Icon>
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faCss3}/>
                <Name>CSS</Name>
            </Icon>
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faJs}/>
                <Name>JS</Name>
            </Icon>
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faReact}/>
                <Name>REACT</Name>
            </Icon>  
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faNodeJs}/>
                <Name>NODEJS</Name>
            </Icon>
            <Icon>
                <Img src={mongodb}/>
                <Name>MONGODB</Name>
            </Icon>   
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faDatabase}/>
                <Name>SQL</Name>
            </Icon> 
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faGitAlt}/>
                <Name>GIT</Name>
            </Icon>
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faGithub}/>
                <Name>GITHUB</Name>
            </Icon>   
            </div>  
      </Container>
  )
};

export default AboutMe;