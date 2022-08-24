import Footer from "components/footer";
import Header from "components/header";
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
    link: "https://wa.me/5586988561453",
  },
];

const Contact = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm("meu_gmail", "template_k28uopb", e.target, "aOsZ5PH7k-rGZK5rn")
      .then(
        (result) => {
          alert("Obrigado, tentarei responder o mais breve possivel.");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Main>
      <Header />
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
          <Typography
            variant="h6"
            color={neutralColor}
            align="center"
            className="typografy_2"
          >
            Procuro oportunidade de trabalho onde eu possa aprender, me
            desenvolver e evoluir na minha carreia profissional.
          </Typography>
        </div>            
        <Form component="form" onSubmit={sendEmail}>
          <TextField
            required
            id="filled-required"
            label="Nome"
            variant="filled"
            size="small"
            name="name"
          />
          <TextField
            required
            id="filled-required"
            label="E-mail"
            variant="filled"
            size="small"
            name="email"
            inputProps={{
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
              title: "E-mail invalido",
            }}
          />
          <TextField
            required
            id="filled-multiline-static"
            label="Menssagem"
            size="small"
            multiline
            rows={4}
            variant="filled"
            name="message"
          />
          <Button sx={sendButton} type="submit" value="Send">
            Enviar
          </Button>
        </Form>
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
