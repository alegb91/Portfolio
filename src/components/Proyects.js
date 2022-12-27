import { GitHub, Web } from '@mui/icons-material';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import drumMachineImg from "../images/Proyects/DrumMachine.png";
import axeGymImg from "../images/Proyects/AxeGym.png";
import CountriesImg from "../images/Proyects/Countries.png";
import taskManagerImg from "../images/Proyects/TaskManager.png";
import TeslaImg from "../images/Proyects/Tesla.png"


import AOS from "aos";
import "aos/dist/aos.css";


const Container = styled.div`
margin: 0;
`


const Title = styled.h2`
text-align: center;
margin-bottom: 70px;
padding-top: 30px;
font-size: 50px;
color: #fbfef9;
`



const LinkHover = styled.div`
top: 0;
left: 0;
background-color: #fbfef9;
position: absolute;
opacity: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
transition: all 1s ease;
border: 1px solid black;
border-radius: 5px;


&:hover {
  opacity: 1;
}
`

const Link = styled.div`
position: relative;
height: 100%;
width: 100%;
border-radius: 2%;
flex: 1; 
`


const Img = styled.img`
height: auto;
width: 100%;
// border: 1px solid #fbfef9;
position: relative;
border-radius: 5px;
box-shadow: 3px 3px 20px black;
`

const Icons = styled.a`
margin: 20px;
transform: scale(1.3);
transition: all 0.5s ease;
color: rgb(4, 93, 152);

&:hover {
  transform: scale(1.5);
  color: rgb(4, 93, 152);
}
`

const IconsPage = styled.a`
margin: 20px;
transform: scale(1.5);
transition: all 0.5s ease;
color: rgb(4, 93, 152);

&:hover {
  transform: scale(1.7);
  color: rgb(4, 93, 152);
}
`

const ProyectTitle = styled.h2`
text-align: center;
color: #fbfef9;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`

const Strong = styled.span`
font-weight: bold;
font-family: 'BenchNine', sans-serif;
padding: 3px;
font-size: 25px;
color: rgb(4, 93, 152);
text-shadow: -0.1px 0.1 white;
`

const ProyectDesc = styled.span`
text-align: center;
color: #fbfef9;
font-family: 'BenchNine', sans-serif;
word-spacing: 3px;
font-size: 20px;
`

const Pils = styled.span`
background: transparent;
font-family: 'BenchNine', sans-serif;
word-spacing: 3px;
color: #fbfef9;
border-radius: 5px;
padding: 3px 10px;
font-size: 20px;
width: auto;
margin: 2px;
`

const APIButton = styled.a`
  text-decoraton: none;
  color: #fbfef9;
  background-color: rgb(4, 93, 152);
  border: solid 1.5px rgb(4, 93, 152);
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  text-align: center;
  width: fit-content;
  align-self: center;

  &:hover {
    color: #fbfef9;
    border: solid 1.5px #fbfef9;
  }
`

const Proyects = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-out-sine',
      delay: 100,
      anchorPlacement: "top-bottom",
    })
    window.addEventListener('load', AOS.refresh)

  })


  return (
          <Container className="container mt-5" id="proyects">
          
         
              <div className="col-12 mb-5">
                <Title>My Proyects</Title>
              </div> 


    <div className="row py-5 d-flex justify-content-center align-items-center">
        
      <div data-aos="fade-right" className="col-10 col-md-8 col-lg-5 px-5 text-center d-flex flex-column mb-2">
        <ProyectTitle>TaskManager with custom API</ProyectTitle>
        <ProyectDesc> 
          
        </ProyectDesc>
        <div className="my-2 d-flex justify-content-center align-items-center">
        <Pils>JavaScript <Strong>/</Strong> React <Strong>/</Strong> NodeJS <Strong>/</Strong> Express <Strong>/</Strong> MongoDB <Strong>/</Strong> Styled Components <Strong>/</Strong> Axios <Strong>/</Strong> React Router</Pils>
        </div>
        <APIButton target="_blank" href="https://github.com/alegb91/TaskAPI">API Code</APIButton>
     </div>

      <div data-aos="fade-left" className="col-10 col-md-8 col-lg-5">
      <Link>  
        <Img src={taskManagerImg}/> 
      <LinkHover>
        <IconsPage target="_blank" href="https://alegb91.github.io/TaskManager/">
          <Web />
        </IconsPage>
          <Icons target="_blank" href="https://github.com/alegb91/TaskManager">
        <GitHub />
        </Icons>
      </LinkHover>
      </Link>
      </div>

      </div>        
    


    <div className="row py-5 d-flex justify-content-center align-items-center">
        
      <div data-aos="fade-right" className="col-10 col-md-8 col-lg-5 px-5 text-center d-flex flex-column mb-2">
        <ProyectTitle>Countries Info and Climate App</ProyectTitle>
        <ProyectDesc> 
          
        </ProyectDesc>
        <div className="my-2 d-flex justify-content-center align-items-center">
        <Pils>JavaScript <Strong>/</Strong> React <Strong>/</Strong> React ContextAPI <Strong>/</Strong> StyledComponents <Strong>/</Strong> Material UI <Strong>/</Strong> Axios <Strong>/</Strong> React Router</Pils>
        </div>
     </div>

      <div data-aos="fade-left" className="col-10 col-md-8 col-lg-5">
      <Link>  
        <Img src={CountriesImg}/> 
      <LinkHover>
        <IconsPage target="_blank" href="https://alegb91.github.io/CountriesApp/">
          <Web />
        </IconsPage>
          <Icons target="_blank" href="https://github.com/alegb91/CountriesApp">
        <GitHub />
        </Icons>
      </LinkHover>
      </Link>
      </div>

      </div>

      <div className="row py-5 d-flex justify-content-center align-items-center">
        
        <div data-aos="fade-right" className="col-10 col-md-8 col-lg-5 px-5 text-center mb-2">
        <ProyectTitle>Gym Landing Page</ProyectTitle>
  
        <Description>
            <ProyectDesc></ProyectDesc>
            <ProyectDesc></ProyectDesc>
          </Description>
        <div className="my-2 d-flex justify-content-center align-items-center">
          <Pils>JavaScript <Strong>/</Strong> React <Strong>/</Strong> Styled-Components <Strong>/</Strong> Material UI <Strong>/</Strong> Animate.css <Strong>/</Strong> React-Router</Pils>
          </div>
        </div>
  
        <div data-aos="fade-left" className="col-10 col-md-8 col-lg-5">
        <Link>  
        <Img src={axeGymImg}/>
        <LinkHover>
          <IconsPage target="_blank" href="https://alegb91.github.io/Axe-Gym/">
          <Web />
          </IconsPage>
            <Icons target="_blank" href="https://github.com/alegb91/Axe-Gym">
            <GitHub />
          </Icons>
        </LinkHover>
        </Link>
        </div>
  
        </div> 


      

      <div className="row py-5 d-flex justify-content-center align-items-center">
        
        <div data-aos="fade-right" className="col-10 col-md-8 col-lg-5 px-5 text-center mb-2">
            <ProyectTitle>Tesla Clone</ProyectTitle>
            <div className="my-2 d-flex justify-content-center align-items-center">
              <Pils>JavaScript <Strong>/</Strong> React <Strong>/</Strong> Material UI <Strong>/</Strong> StyledComponents <Strong>/</Strong> React-reveal </Pils>
            </div>
        </div>
  
        <div data-aos="fade-left" className="col-10 col-md-8 col-lg-5">
            <Link>  
            <Img style={{ border: "black"}} src={TeslaImg}/>
            <LinkHover>
              <IconsPage target="_blank" href="https://alegb91.github.io/Tesla-Clone/">
              <Web />
              </IconsPage>
                <Icons target="_blank" href="https://github.com/alegb91/Tesla-Clone">
                <GitHub />
              </Icons>
            </LinkHover>
            </Link>
      </div>
  
        </div>    

        <div className="row py-5 d-flex justify-content-center align-items-center">

        <div data-aos="fade-right" className="col-10 col-md-8 col-lg-5 px-5 text-center mb-2">
        <ProyectTitle>Drum Machine</ProyectTitle>
        <Description>
        <ProyectDesc> FreeCodeCamp Proyect</ProyectDesc>
        </Description>
        <div className="my-2 d-flex justify-content-center align-items-center">
        <Pils>JavaScript <Strong>/</Strong> React </Pils>
        </div>
        </div>

        <div data-aos="fade-left" className="col-10 col-md-8 col-lg-5">
      <Link>  
      <Img src={drumMachineImg}/>
      <LinkHover>
        <IconsPage target="_blank" href="https://alegb91.github.io/Drum-Machine/">
        <Web />
        </IconsPage>
          <Icons target="_blank" href="https://github.com/alegb91/Drum-Machine">
          <GitHub />
        </Icons>
      </LinkHover>
      </Link>
      </div>

      </div>

    </Container>
  )
}

export default Proyects;


        
        
        