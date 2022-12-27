import { Mail, LocationOn, Phone, GitHub, LinkedIn } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com"

const Container = styled.div` 
position: relative;  
display: flex;
height: 85vh;
padding: 0 100px 0 100px;
margin: 0;
`

const SubContainer = styled.div `
    margin: 0;
    padding: 0;
    height: 100%;
    position: relative;
`

const Title = styled.h1`
color: #fbfef9;
margin: 0;
margin-bottom: 70px;
font-size: 50px;
text-align: center;
`

const InfoContainer = styled.div`
display: flex;
color: #fbfef9;
margin: 20px;
justify-content: center;
align-items: center;
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
`;

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

    useEffect(() => {
        AOS.init({
          offset: 0,
          duration: 1000,
          easing: 'ease-out-sine',
          delay: 0,
        })
      })
      window.addEventListener('load', AOS.refresh)

  return (
    <Container className="container pt-3" id="contactMe">
        <SubContainer className='row m-0 align-content-start justify-content-between w-100 pt-4 px-5'>
        <SubContainer className='col m-0'>
        <Title>Contact Me</Title>
            <InfoContainer data-aos="fade-left">
                    <Icon>
                        <Phone />
                    </Icon>
                    <Span>+543815622754</Span>
                </InfoContainer>
                <InfoContainer data-aos-anchor-placement="top-bottom" data-aos="fade-left">
                    <Icon>
                        <Mail />
                    </Icon>
                    <Span>alegb91@gmail.com</Span>
                </InfoContainer>
                <InfoContainer data-aos-anchor-placement="top-bottom" data-aos="fade-left">
                    <Icon>
                        <LocationOn />
                    </Icon>
                    <Span>Tucuman, Argentina</Span>
                </InfoContainer>
                <InfoContainer data-aos-anchor-placement="top-bottom" data-aos="fade-left">
                    <ContactIcon target="_blank" href="https://github.com/alegb91">
                        <GitHub />
                    </ContactIcon>
                    <ContactIcon target="_blank" href="https://www.linkedin.com/in/alejandrogonzalezbuffo/">
                        <LinkedIn />
                    </ContactIcon>
                </InfoContainer>
                
                
            </SubContainer>    
        <SubContainer className='col m-0'> 
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
                {formStatus === "Enviado" ? <Send data-aos="fade">Message send</Send> : null}
                {formStatus === "Error" ? <Error data-aos="fade">Error</Error> : null}
               </form>
            </SubContainer>
        </SubContainer>
    </Container>
  )
}

export default ContactForm;