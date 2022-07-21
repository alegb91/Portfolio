import { GitHub, LinkedIn } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: relative;
height: 10vh;
width: 100%;
display: flex;
align-items: end;
flex-direction: column;
padding-top: 20px;
padding-bottom: 40px;

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