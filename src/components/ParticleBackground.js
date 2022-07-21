import React from "react"
import Particles from 'react-tsparticles'
import styled from "styled-components";
import { loadFull } from "tsparticles";
import particleConfig from "../config/particleConfig";
 
function ParticleBackground() {

    const Container = styled.div`
    z-index: -1;
    `

  const particlesInit = async (main) => {
    console.log(main);
 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Container>
   
     <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particleConfig}
      />  
  </Container>
  );
}
 
export default ParticleBackground;