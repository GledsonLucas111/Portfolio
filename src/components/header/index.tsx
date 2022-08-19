import * as React from "react";
import Typography  from "@mui/material/Typography";
import { BoxList, BoxLogo, Component, StyledBurguer } from "./styles";
import GL from "assets/GL.svg";

const Header = () => {
  const [active, setActive] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    setActive(open);
  };
  
  return (
    <Component>
      <BoxLogo>
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
        <Typography variant="h6" className="typeList">
          Sobre mim
        </Typography>
        <Typography variant="h6" className="typeList">
          Projetos
        </Typography>
        <Typography variant="h6" className="typeList">
          Contatos
        </Typography>
      </BoxList>
    </Component>
  );
};
export default Header;
