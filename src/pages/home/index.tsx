import * as React from "react";
import Header from "components/header";
import {
  BoxAnimation,
  BoxApresentation,
  buttonCV,
  HomeComponent,
} from "./styles";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";
import Lottie from "react-lottie";
import developer from "animations/developer-yoga.json";
import Button from "@mui/material/Button";
import Footer from "components/footer";

const Home = () => {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: developer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <HomeComponent>
      <Header />
      <BoxApresentation>
        <Typography variant="h3" className="presentation">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Olá, Eu sou o Gledson")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Bem vindo ao meu portfólio")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Olá, Eu sou o Gledson")
                .start();
            }}
          />
        </Typography>
        <Typography noWrap={true} variant="h5" className="description">
          Desenvolvedor Web Full Stack
        </Typography>
      </BoxApresentation>
      <BoxAnimation>
        <div className="buttonCV">
          <Button sx={buttonCV}>download cv</Button>
        </div>
        <div className="animation">
          <Lottie options={defaultOptions} width="100%" />
        </div>
      </BoxAnimation>
      <Footer />
    </HomeComponent>
  );
};
export default Home;
