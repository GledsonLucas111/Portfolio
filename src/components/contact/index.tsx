import * as React from "react";
import Footer from "components/footer";
import { Content, Form, Main, sendButton } from "./styles";
import { BsLinkedin, BsWhatsapp, BsGithub, BsInstagram } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { neutralColor } from "constants/colors";
import { Actions } from "types/contact";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Zoom from "@mui/material/Zoom";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const actions: Actions[] = [
  {
    icon: <RiMailSendLine />,
    name: "E-mail",
    link: "mailto:gledsonlucas111@gmail.com",
  },
  {
    icon: <BsLinkedin />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gledson-lucas-1b5873166/",
  },
  {
    icon: <BsGithub />,
    name: "GitHub",
    link: "https://github.com/GledsonLucas111",
  },
  {
    icon: <BsInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/gledsonlucasm/",
  },
  {
    icon: <BsWhatsapp />,
    name: "WhatsApp",
    link: "https://wa.me/5511913197092",
  },
];

const Contact = () => {
  const sendEmail = (e: React.FormEvent | any) => {
    e.preventDefault();
    emailjs
      .sendForm("meu_gmail", "template_k28uopb", e.target, "aOsZ5PH7k-rGZK5rn")
      .then(
        (result) => {
          Swal.fire({
            title: "Enviado!",
            html: "Tentarei responder o mais breve possível.",
            icon: "success",
            confirmButtonText: 'Ok',
            confirmButtonColor: '#3BC974'
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Main id="contact">
      <Content>
        <div>
          <Typography
            variant="h5"
            color="secondary"
            align="center"
            className="typografy_1"
          >
            Entre em contato
          </Typography>
        </div>
        <div className="icons">
          {actions.map((action: Actions) => {
            return (
              <Tooltip
                title={action.name}
                key={action.name}
                TransitionComponent={Zoom}
              >
                <IconButton href={action.link} target="_blank">
                  {action.icon}
                </IconButton>
              </Tooltip>
            );
          })}
        </div>
      </Content>
      <Footer />
    </Main>
  );
};

export default Contact;
