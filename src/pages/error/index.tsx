import * as React from "react";
import { buttonBack, Component, HeaderError, InfoError } from "./styles";
import notFound from "animations/404.json";
import Lottie from "react-lottie";
import Footer from "components/footer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { goToHome } from "routes/Coordinator";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Component>
      <HeaderError>
      <Typography variant="h6" className="header">
       404 not found   
      </Typography>
      </HeaderError>

      <InfoError>
      <div className="left">
        <Typography variant="h3" className="error">
          Tenho más noticias <p>para você</p>
        </Typography>
        <Typography variant="h6" className="typeError">
          A página que você está procurando não foi encontrada
          <p >ou está temporariamente indisponível</p>
        </Typography>
        <div>
          <Button sx={buttonBack} onClick={()=> goToHome(navigate)}>Voltar</Button>
        </div>
      </div>

      <div className="rigth">
        <Lottie options={defaultOptions} width="100%" />
      </div>
      </InfoError>

      <Footer />

    </Component>
  );
};
export default Error;
