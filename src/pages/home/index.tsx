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
import About from "components/about";
import Projects from "components/projects";
import Contact from "components/contact";

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
                .typeString("Olá! Eu sou o Gledson.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Bem vindo(a) ao meu portfólio!")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Olá! Eu sou o Gledson.")
                .start();
            }}
          />
        </Typography>
        <Typography noWrap={true} variant="h5" className="description">
          Desenvolvedor Web Full Stack
        </Typography>
      </BoxApresentation>
      <BoxAnimation>
        <div className="animation">
          <Lottie options={defaultOptions} width="100%" />
        </div>
        <div className="buttonCV">
          <Button
            sx={buttonCV}
            href="https://drive.google.com/file/d/1NY2KqxLBmKRUPJ0Zud1DiyU3CkEby5Ky/view?usp=sharing"
            target="_blank"
          >
            download cv
          </Button>
        </div>
      </BoxAnimation>
      <About />
      <Projects />
      <Contact />
    </HomeComponent>
  );
};
export default Home;
