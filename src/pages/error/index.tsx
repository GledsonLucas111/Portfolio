import { buttonBack, Component } from "./styles";
import notFound from "animations/lonely-404.json";
import Lottie from "react-lottie";
import Button from "@mui/material/Button";
import { goToHome } from "routes/Coordinator";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Error = () => {
  const navigate = useNavigate();
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
      <div className="button">
        <Button sx={buttonBack} onClick={() => goToHome(navigate)}>
          Voltar
        </Button>
      </div>
      <div>
        <Typography variant="h6" className="typeError">
          Error 404 - Página não encontrada.
        </Typography>
        <Typography variant="h6" className="error">
          A página que você tentou acessar está indisponível ou não exite.
        </Typography>
      </div>
      <div className="animation">
        <Lottie options={defaultOptions} width="100%" />
      </div>
    </Component>
  );
};
export default Error;
