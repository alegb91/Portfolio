import { Mail, LocationOn, Phone, GitHub, LinkedIn } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';
import emailjs from "emailjs-com";
import 'animate.css';

const Container = styled.div` 
position: relative;  
display: flex;
justify-content: center;
align-items: center;    
min-height: 85vh;
padding: 0 50px;
margin: 0 140px;

@media(max-width: 1200px ) {
    margin: 0 100px;
}

@media(max-width: 1000px ) {
    margin: 0 30px;
    padding: 0 30px;
}

@media(max-width: 800px ) {
    margin: 0 10px;
    padding: 0 10px;
}

@media(max-width: 700px ) {
    flex-direction: column;
    margin:0 50px 0 50px;
    padding: 50px 0;
}

@media(max-width: 500px ) {
    margin:0 10px 0 10px;
    padding: 50px 0;
}
`

const SubContainer = styled.div `
    margin: 0;
    height: 100%;
    width: 100%;
    position: relative;
`

const Title = styled.h1`
color: #fbfef9;
margin: 0;
margin-bottom: 40px;
font-size: 50px;
text-align: center;

@media(max-width: 700px) {
    margin-top: 20px;
    margin-bottom: 30px;
}
`

const InfoContainer = styled.div`
    display: flex;
    color: #fbfef9;
    margin: 20px;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: fadeInRight;
    animation-duration: 0.5s; 
    animation-fill-mode: forwards;
    animation-delay: ${props => props.delay};

    @media(max-width: 500px) {
        justify-content: start;
        padding-left: 20px; 
    }
`

const Icon = styled.div`
margin: 7px;
margin-top: 2px;
`

const Button = styled.button`
margin: 0px 25px;
width: 75px;
background-color: transparent;
border: 1.5px solid rgb(4, 93, 152);
padding: 5px;
color: #fbfef9;
border-radius: 5px;
display: inline;
transition: all 0.5s ease;
flex: 1;

&:hover { 
    background-color: rgb(4, 93, 152);
    color: #fbfef9;
}
`

const ContactIcon = styled.a`
margin: 0px 10px;
transform: scale(1.1);
transition: all 0.5s ease;
cursor: pointer;
color: #fbfef9;

&:hover {
    color: rgb(4, 93, 152);
    transform: scale(1.3);
}
`

const Span = styled.span`
margin: 7px;
`

const InputContainer = styled.div`
    padding: 10px 25px;
`

const Label = styled.div`
color: #fbfef9;
margin-left: 30px;
margin-bottom: 5px;
`

const Input = styled.input`
border-radius: 5px;
border: 1px solid black;
height: 30px;
width: 100%;
padding-left: 5px;
background-color: #fbfef9;
color: black;
`
const TextArea = styled.textarea`
border-radius: 5px;
border: 1px solid black;
height: 200px;
width: 100%;
padding-left: 5px;
resize: none;
background-color: #fbfef9;
color: black;
`

const Send = styled.div`
border: 1px solid black;
border-radius: 5px;
display: inline;
height: 25px;
padding: 5px;
width: auto;
color: #fbfef9;
background-color: green;
margin: 10px;
`

const Error = styled.div`
border: 1px solid black;
border-radius: 5px;
display: inline;
height: 25px;
padding: 5px;
width: auto;
color: #fbfef9;
background-color: red;
margin: 10px;
`


const ContactForm = () => {

    const [formStatus, setFormStatus] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_xh3j2ei', e.target, 'N3ZywYzu5oI_-xo7F')
          .then((result) => {
              console.log(result.text);
              setFormStatus("Enviado");
              const timer = setTimeout(() => {
                setFormStatus(null);
              }, 2000);
              return () => clearTimeout(timer);
          }, (error) => {
              console.log(error.text);
              setFormStatus("Error");
              const timer = setTimeout(() => {
                setFormStatus(null);
              }, 2000);
              return () => clearTimeout(timer);
          });
          e.target.reset()
    }

  return (
    <Container id="contactMe">
        <SubContainer>
        <Title>Contact Me</Title>
            <InfoContainer delay='0'>
                    <Icon>
                        <Phone />
                    </Icon>
                    <Span>+543815622754</Span>
                </InfoContainer>
                <InfoContainer delay='0.1s'>
                    <Icon>
                        <Mail />
                    </Icon>
                    <Span>alegb91@gmail.com</Span>
                </InfoContainer>
                <InfoContainer delay='0.2s'>
                    <Icon>
                        <LocationOn />
                    </Icon>
                    <Span>Tucuman, Argentina</Span>
                </InfoContainer>
                <InfoContainer delay='0.3s'>
                    <ContactIcon target="_blank" href="https://github.com/alegb91">
                        <GitHub />
                    </ContactIcon>
                    <ContactIcon target="_blank" href="https://www.linkedin.com/in/alejandrogonzalezbuffo/">
                        <LinkedIn />
                    </ContactIcon>
                </InfoContainer>
                
                
            </SubContainer>    
        <SubContainer> 
            <form onSubmit={sendEmail}>
            <InputContainer>
                    <Label >Name</Label>
                    <Input type_="text" name="name"/> 
                </InputContainer>
                <InputContainer>
                    <Label >E-Mail</Label>
                    <Input type="email" name="email"/> 
                </InputContainer>
                <InputContainer>
                    <Label >Message</Label>
                    <TextArea type="text" name="message"/> 
                </InputContainer>
                <Button type="submit">Send</Button>
                {formStatus === "Enviado" ? <Send>Message send</Send> : null}
                {formStatus === "Error" ? <Error>Error</Error> : null}
               </form>
            </SubContainer>
    </Container>
  )
}

export default ContactForm;