import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import NavBar from "./components/NavBar";
import ParticleBackground from "./components/ParticleBackground";
import Proyects from "./components/Proyects";
import ToolBox from "./components/ToolBox";
import StartingPage from "./components/StartingPage";

const Container = styled.div`
position: relative;
background-color: #2a2b39;
`

const SubContainer1 = styled.div`
position: relative;
z-index: 0;
`

const Subcontainer2 = styled.div`
position: relative;
z-index: 100;
`

function App() {


  return (
    <Container>
      <SubContainer1>
        <ParticleBackground />

        </SubContainer1>
        <Subcontainer2>
         
      <NavBar />
      <StartingPage />
      <AboutMe />
      <Proyects />
      <ToolBox />
      <ContactForm /> 
      </Subcontainer2>
    </Container>
    
  );
}

export default App;
