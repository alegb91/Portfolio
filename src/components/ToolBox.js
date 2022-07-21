
import React from 'react';
import styled from 'styled-components';
import mongodb from "../images/Toolbox-icons/mongodb.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGitAlt, faGithub, faHtml5, faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';


const Container = styled.div`
margin-top: 200px;
margin-bottom: 200px;
padding: 50px;
border-top: 2px solid white;
border-bottom: 2px solid white;

`

const Icon = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin: 20px;
`

const NodeIcon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin: 20px;
`

const Img = styled.img`
color: #fbfef9;
height: 50px;
width: 50px;
align-text: center;
`;

const Name = styled.span`
margin-top: 10px;
color: #fbfef9;
`;

const ToolBox = () => {
  return (
    <Container className="container">
        <div className="row">
            <div className="offset-md-1 col-md-6 d-flex justify-content-around">
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
            </div>
            <div className="col-md-4 d-flex justify-content-around">
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faReact}/>
                <Name>REACT</Name>
            </Icon>  
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faBootstrap}/>
                <Name>BOOTSTRAP</Name>
            </Icon>  
            </div>
            </div>
            <div className="row">
            <div className="offset-md-1 col-md-6 d-flex justify-content-around">
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faSass}/>
                <Name>SASS</Name>
            </Icon>
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faNodeJs}/>
                <Name>NODEJS</Name>
            </Icon>
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faGitAlt}/>
                <Name>GIT</Name>
            </Icon>
            </div>
            <div className="col-md-4 d-flex justify-content-around">
            <Icon>
            <FontAwesomeIcon className="ToolBox-Icons" icon={faGithub}/>
                <Name>GITHUB</Name>
            </Icon>   
            <NodeIcon>
                <Img src={mongodb}/>
                <Name>MONGODB</Name>
            </NodeIcon> 
        </div>
        </div>
    </Container>

  )
}

export default ToolBox;