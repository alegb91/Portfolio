import styled from "styled-components";
import ParticleBackground from "./components/ParticleBackground";
import { AnimatedRoutes } from "./components";

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
          <AnimatedRoutes />
      </Subcontainer2>
    </Container>
    
  );
}

export default App;
