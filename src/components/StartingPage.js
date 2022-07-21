import React from 'react'
import styled from 'styled-components';
import CV from "../config/alejandroGonzalezBuffoIngles.pdf"


const Container = styled.div`
display: flex;
flex-direction: column;
height: 90vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 400px) {
  margin: 0px 5px;
  height: 70vh;
}
`

const SubContainer = styled.div`
display: flex; 
flex-direction: column;
padding-right: 250px;
padding-bottom: 100px;

@media (max-width: 500px) {
  padding: 0;
}
`

const Introduction = styled.span`
color: #fbfef9;
font-size: 40px;
font-weight: bold;

@media (max-width: 500px) {
  margin: 0px 30px; 
 }
`

const Name = styled.span`
color: rgb(4, 93, 152);
font-size: 50px;
font-weight: bold;
`

const Links = styled.div`
display: flex;
justify-content: start;
align-items: start;
margin-top: 10px;

@media (max-width: 500px) {
  margin: 0px 30px; 
 }
`

const Link = styled.a`
color: #fbfef9;
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

const StartingPage = () => {
  return (
    <Container className="container">
      <div className="row">
        <div className="d-flex col m-1 p-0">
        <SubContainer>
        <Introduction>Hi! I'm <Name>Ale</Name>.</Introduction>
        <Introduction>I'm a Front-End developer.</Introduction>
        <Links className="container">
          <div className="row">
        <div className="col-10 col-md-6 d-flex p-0">
        <Link href="#aboutMe">About</Link>
        <Link href="#proyects">Proyects</Link>
        </div>
        <div className="col-10 col-md-6 d-flex p-0">
        <Link href="#contactMe">Contact</Link>
        <Link href={CV} target="_blank">Resume</Link>
        </div>
        </div>
        </Links>
        </SubContainer>
        </div>
        </div>
    </Container>
  )
}

export default StartingPage;