import React from 'react';
import styled from 'styled-components';
import CV from "../config/AlejandroGonzalezBuffoEnglish.pdf";
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 400px) {
  margin: 0px;
}
`

const SubContainer = styled.div`
display: flex; 
flex-direction: column;
position: absolute;
top: 30vh;
left: 30vh;

@media (max-width: 900px) {
left: 20vh;
}

@media (max-width: 700px) {
  left: 5vh;
}

@media (max-width: 500px) {
  padding: 20px;
  left: 1vh;
}
`

const Introduction = styled.span`
color: #fbfef9;
font-size: 40px;
font-weight: bold;

@media (max-width: 350px) {
  font-size: 35px;
 }
`

const Name = styled.span`
color: rgb(4, 93, 152);
font-size: 50px;
font-weight: bold;

@media (max-width: 350px) {
  font-size: 35px;
 }
`

const Links = styled.div`
display: flex;
justify-content: start;
align-items: start;
margin-top: 10px;

@media (max-width: 350px) {
  flex-direction: column; 
 }
`

const Button = styled.div`
color: #fbfef9;
text-decoration: none;
background-color: transparent;
padding: 5px;
border: solid 1.5px rgb(4, 93, 152);
border-radius: 5px;
text-decoration: none;
margin: 5px;
cursor: pointer;
transition: all 0.3s ease;
flex: 1;
text-align: center;

@media (max-width: 500px) {
 margin: 5px; 
}

&:hover {
  color: #fbfef9;
  background-color: rgb(4, 93, 152);
}
`

const ButtonCV = styled.a`
color: #fbfef9;
text-decoration: none;
background-color: transparent;
padding: 5px;
border: solid 1.5px rgb(4, 93, 152);
border-radius: 5px;
text-decoration: none;
margin: 5px;
cursor: pointer;
transition: all 0.3s ease;
text-align: center;
width: fit-content;

@media (max-width: 500px) {
 margin: 5px; 
}

&:hover {
  color: #fbfef9;
  background-color: rgb(4, 93, 152);
}
`

const InfoContainer = styled.div`
position: absolute;
top: 70px;
right: 70px;
display: flex;
color: #fbfef9;
padding: 10px 30px;

@media (max-width: 800px) {
  right: 40px;
 }

 @media (max-width: 500px) {
  right: 10px;
 }

 @media (max-width: 350px) {
  right: 0;
 }
`

const ContactIcon = styled.a`
margin: 0px 15px;
transform: scale(1.1);
transition: all 0.5s ease;
cursor: pointer;
color: #fbfef9;

&:hover {
    color: rgb(4, 93, 152);
    transform: scale(1.3);
}`

const StartingPage = () => {
  return (
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    >
      <Container>
      <InfoContainer>
          <ContactIcon target="_blank" href="https://github.com/alegb91">
              <GitHub />
          </ContactIcon>
          <ContactIcon target="_blank" href="https://www.linkedin.com/in/alejandrogonzalezbuffo/">
              <LinkedIn />
          </ContactIcon>
      </InfoContainer>
        <SubContainer>
        <Introduction>Hi! I'm <Name>Ale</Name>.</Introduction>
        <Introduction>I'm a Front-End Developer.</Introduction>
        <Links>
            <div className="d-flex p-0">
                <Link style={{textDecoration: 'none'}} to='/aboutMe'><Button>About</Button></Link>
                <Link style={{textDecoration: 'none'}} to='/proyects'><Button>Proyects</Button></Link>
            </div>
            <div className="d-flex p-0">
                <Link style={{textDecoration: 'none'}} to='/contactForm'><Button>Contact</Button></Link>
                <ButtonCV href={CV} target="_blank">Resume</ButtonCV>
            </div>
        </Links>
        </SubContainer>
        </Container>
    </motion.div>
  )
}

export default StartingPage;