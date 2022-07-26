import * as React from "react";
import Typography  from "@mui/material/Typography";
import { BoxList, BoxLogo, Component, StyledBurguer } from "./styles";
import GL from "assets/GL.svg";
import { goToHome,  } from "routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

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
        <Button className="typeList" href="#about">
          Sobre mim
        </Button>
        <Button className="typeList" href="#projects" >
          Projetos
        </Button>
        <Button className="typeList" href="#contact">
          Contatos
        </Button>
      </BoxList>
      
    </Component>
  );
};
export default Header;
