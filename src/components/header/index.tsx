import * as React from "react";
import Typography  from "@mui/material/Typography";
import { BoxList, BoxLogo, Component, StyledBurguer } from "./styles";
import GL from "assets/GL.svg";
import { goToAbout, goToContact, goToHome, goToProjects } from "routes/Coordinator";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    setActive(open);
  };
  
  return (
    <Component>
      <BoxLogo onClick={()=> goToHome(navigate)}>
        <img alt="logo-GL" src={GL} />
        <Typography className="typografy-logo" variant="h6">
          Gledson Lucas
        </Typography>
      </BoxLogo>

      <StyledBurguer active={active} onClick={() => toggleDrawer(!active)}>
        <div />
        <div />
        <div />
      </StyledBurguer>
      <BoxList active={active} onClick={() => toggleDrawer(false)}>
        <Typography variant="h6" className="typeList" onClick={()=> goToAbout(navigate)}>
          Sobre mim
        </Typography>
        <Typography variant="h6" className="typeList" onClick={()=> goToProjects(navigate)}>
          Projetos
        </Typography>
        <Typography variant="h6" className="typeList" onClick={()=> goToContact(navigate)}>
          Contatos
        </Typography>
      </BoxList>
      
    </Component>
  );
};
export default Header;
