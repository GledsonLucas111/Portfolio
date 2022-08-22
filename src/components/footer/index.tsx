import Typography from "@mui/material/Typography";
import { Component } from "./styles";

const Footer = () => {
  return (
    <Component>
      <Typography noWrap={true} variant="body1" className="textFooter">
        © Made by Gledson Lucas
      </Typography>
    </Component>
  );
};

export default Footer;
