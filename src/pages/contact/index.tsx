import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Footer from "components/footer";
import Header from "components/header";
import { Component, Form } from "./styles";
import { BsLinkedin, BsWhatsapp, BsGithub, BsInstagram } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { neutralColor } from "constants/colors";

const Contact = () => {
  const actions: any = [
    { icon: <RiMailSendLine />, name: "E-mail" },
    { icon: <BsLinkedin />, name: "LinkedIn" },
    { icon: <BsGithub />, name: "GitHub" },
    { icon: <BsInstagram />, name: "Instagram" },
    { icon: <BsWhatsapp />, name: "WhatsApp" },
  ];
  return (
    <div>
      <Header />
      <Typography variant="h5" color="secondary" align="center">
        Entre em contato
      </Typography>
      <Typography variant="h6" color={neutralColor} align="center">
        Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver
        e evoluir na minha carreia profissional.
      </Typography>

      <Component>
        <div>
          {actions.map((action: any) => {
            return <Button >{action.icon}</Button>;
          })}
        </div>
        <Form component="form">
          <TextField
            required
            id="filled-required"
            label="Nome"
            variant="filled"
            size="small"
          />
          <TextField
            required
            id="filled-required"
            label="Email"
            variant="filled"
            size="small"
          />
          <TextField
            required
            id="filled-multiline-static"
            label="Menssagem"
            multiline
            rows={4}
            variant="filled"
          />
        </Form>
      </Component>

      <Footer />
    </div>
  );
};

export default Contact;
