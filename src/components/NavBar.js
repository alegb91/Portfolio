import { GitHub, LinkedIn } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import CV from "../config/AlejandroGonzalezBuffoEnglish.pdf";
import { Link } from 'react-router-dom';

const Container = styled.div`
position: relative;
height: 15vh;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 50px;

@media (max-width: 500px) {
}
`

const InfoContainer = styled.div`
display: flex;
color: #fbfef9;
padding: 10px 30px;
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
}
`

const Links = styled.div`
display: flex;
justify-content: start;
align-items: start;
margin-top: 10px;

@media (max-width: 500px) {
  padding-left: 30px; 
 }
`

const Button = styled.div`
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

const ButtonCV = styled.a`
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


const NavBar = () => {

  // const [displayMenu, setDisplayMenu] = useState(false)

  // const showMenu = () => {

  //   const Links = document.getElementById("Link")

  //   if(displayMenu) {
  //     Links.style.display = "none";
  //   setDisplayMenu(false)}

  //   else {Links.style.display = "flex";
  //   setDisplayMenu(true)}
  // }

  return (
    <Container className="container">
      <div className="row">
      <Links className="container">
          <div className="row">
        <div className="col-10 col-md-6 d-flex p-0">
        <Link style={{textDecoration: 'none'}} to='/aboutMe'><Button>About</Button></Link>
        <Link style={{textDecoration: 'none'}} to='/proyects'><Button>Proyects</Button></Link>
        </div>
        <div className="col-10 col-md-6 d-flex p-0">
        <Link style={{textDecoration: 'none'}} to='/contactForm'><Button>Contact</Button></Link>
        <ButtonCV href={CV} target="_blank">Resume</ButtonCV>
        </div>
        </div>
        </Links>
      </div>
      <div className="row">
      <div className="col">
      <InfoContainer>
          <ContactIcon target="_blank" href="https://github.com/alegb91">
              <GitHub />
          </ContactIcon>
          <ContactIcon target="_blank" href="https://www.linkedin.com/in/alejandrogonzalezbuffo/">
              <LinkedIn />
          </ContactIcon>
      </InfoContainer>
      </div>
      </div>
    </Container>
  )
}

export default NavBar