import { GitHub, Code, Web } from '@mui/icons-material';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import climateImg from "../images/Proyects/Climate.png";
import drumMachineImg from "../images/Proyects/DrumMachine.png";
import TeslaImg from "../images/Proyects/Tesla.png"
import toDoListImg from "../images/Proyects/toDoList.png";
import GastbyImg from "../images/Proyects/Gatsby.jpg"
import DashboardImg from "../images/Proyects/Dashboard.png"
import AOS from "aos";
import "aos/dist/aos.css";


const Container = styled.div`
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
border: 1px solid #fbfef9;
position: relative;
border-radius: 5px;
`

const NextProyectsImg = styled.img`
height: auto;
width: 100%;
border: 1px solid black;
position: relative;
border-radius: 5px;
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
font-size: 17px;
color: rgb(4, 93, 152);
text-shadow: -0.1px 0 black, 0 0.1px black, 0.1px 0 black, 0 -0.1px black;
`

const ProyectDesc = styled.span`
text-align: center;
color: #fbfef9;
font-size: 13px;
`

const Pils = styled.span`
border: 1px solid rgb(4, 93, 152);
background: transparent;
color: #fbfef9;
border-radius: 5px;
padding: 3px 10px;
font-size: 10px;
width: auto;
margin: 2px;
`

const InProgress = styled.span`
margin: 20px;
transform: scale(1.3);
transition: all 0.5s ease;
color: rgb(4, 93, 152);
font-weight: bold;
transform: scale(1.5);

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
          <Container className="container mb-5" id="proyects">
          
         
              <div className="col-12 mb-5">
                <Title>My Proyects</Title>
              </div> 
            
    


    <div className="row my-5 d-flex justify-content-center align-items-center">
        
      <div data-aos="fade-right" className="col-10 col-md-8 col-lg-5 px-5 text-center d-flex flex-column mb-2">
        <ProyectTitle>Climate App</ProyectTitle>
        <ProyectDesc> A Climate App using OpenWeather API. I'm also translating it to spanish using another API.</ProyectDesc>
        <div className="my-2 d-flex justify-content-center align-items-center">
        <Pils>Html5</Pils>
        <Pils>CSS</Pils>
        </div>
        <div className="mb-2 d-flex justify-content-center align-items-center">
        <Pils>JavaScript</Pils>
        <Pils>Bootstrap</Pils>
        </div>
     </div>

      <div data-aos="fade-left" className="col-10 col-md-8 col-lg-5">
      <Link>  
        <Img src={climateImg}/> 
      <LinkHover>
        <IconsPage target="_blank" href="https://alegb91.github.io/Climate/">
          <Web />
        </IconsPage>
          <Icons target="_blank" href="https://github.com/alegb91/Climate">
        <GitHub />
        </Icons>
      </LinkHover>
      </Link>
      </div>

      </div>

        <div className="row my-5 d-flex justify-content-center align-items-center">

        <div data-aos="fade-right" className="col-10 col-md-8 col-lg-5 px-5 text-center mb-2">
        <ProyectTitle>Drum Machine</ProyectTitle>
        <Description>
        <ProyectDesc> A Drum Machine proyect i did during my FreeCodeCamp React course. I wanted to make it better so i added some extra features. </ProyectDesc>
        <ProyectDesc><Strong>Help from:</Strong> Landon Schlangen youtube channel.</ProyectDesc>
        </Description>
        <div className="my-2 d-flex justify-content-center align-items-center">
        <Pils>Html5</Pils>
        <Pils>CSS</Pils>
        <Pils>JavaScript</Pils>
        </div>
        <div className="my-2 d-flex justify-content-center align-items-center">
        <Pils>React</Pils>
        <Pils>Bootstrap</Pils>
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

      <div className="row my-5 d-flex justify-content-center align-items-center">
        
      <div data-aos="fade-right" className="col-10 col-md-8 col-lg-5 px-5 text-center mb-2">
        <ProyectTitle>Dashboard App</ProyectTitle>
        <Description>
          <ProyectDesc> An Admin Dashboard App with different Apps, charts and pages like employees and customers. I'm still working on finishing it.</ProyectDesc>
          <ProyectDesc><Strong>Help from:</Strong> JavaScript Mastery youtube channel.</ProyectDesc>
        </Description>
        <div className="my-2 d-flex justify-content-center align-items-center">
        <Pils>Html5</Pils>
        <Pils>CSS</Pils>
        <Pils>JavaScript</Pils>
        </div>
        <div className="my-2 d-flex justify-content-center align-items-center">
        <Pils>React</Pils>
        <Pils>React Context API</Pils>
        <Pils>Syncfusion</Pils>
        </div>
        </div>

        <div data-aos="fade-left" className="col-10 col-md-8 col-lg-5">
      <Link>  
      <Img style={{ border: "black"}} src={DashboardImg}/>
      <LinkHover>
        <IconsPage target="_blank" href="https://alegb91.github.io/Dashboard-App/">
        <Web />
        </IconsPage>
          <Icons target="_blank" href="https://github.com/alegb91/Dashboard-App">
          <GitHub />
        </Icons>
      </LinkHover>
      </Link>
      </div>

      </div>

      <div className="row my-5 d-flex justify-content-center align-items-center">
        
      <div data-aos="fade-right" className="col-10 col-md-8 col-lg-5 px-5 text-center mb-2">
      <ProyectTitle>Better To-Do List</ProyectTitle>

      <Description>
          <ProyectDesc>I did a To-Do List for my FreeCodeCamp course and i added a sub-taks list for each task. I'm also using LocalStorage to save the information.</ProyectDesc>
          <ProyectDesc><Strong>Help from:</Strong> Web Dev Simplified youtube channel.</ProyectDesc>
        </Description>
      <div className="my-2 d-flex justify-content-center align-items-center">
        <Pils>Html5</Pils>
        <Pils>CSS</Pils>
        <Pils>JavaScript</Pils>
        </div>
        <div className="my-2 d-flex justify-content-center align-items-center">
        <Pils>Bootstrap</Pils>
        <Pils>LocalStorage</Pils>
        </div>
      </div>

      <div data-aos="fade-left" className="col-10 col-md-8 col-lg-5">
      <Link>  
      <Img src={toDoListImg}/>
      <LinkHover>
        <IconsPage target="_blank" href="https://alegb91.github.io/To-Do-List/">
        <Web />
        </IconsPage>
          <Icons target="_blank" href="https://github.com/alegb91/To-Do-List">
          <GitHub />
        </Icons>
      </LinkHover>
      </Link>
      </div>

      </div> 

      <div className="row my-5 d-flex justify-content-center align-items-center">
        
        <div data-aos="fade-right" className="col-10 col-md-8 col-lg-5 px-5 text-center mb-2">
            <ProyectTitle>Tesla Clone</ProyectTitle>
            <Description>
              <ProyectDesc> A visual clone of Tesla's main page.</ProyectDesc>
              <ProyectDesc><Strong>Help from:</Strong> Clever Programmer youtube Channel.</ProyectDesc>
            </Description>
            <div className="my-2 d-flex justify-content-center align-items-center">
                <Pils>Html5</Pils>
                <Pils>CSS</Pils>
                <Pils>JavaScript</Pils>
            </div>
            <div className="my-2 d-flex justify-content-center align-items-center">
                <Pils>Bootstrap</Pils>
                <Pils>Styled Components</Pils>
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

    </Container>
  )
}

export default Proyects;


        
        
        