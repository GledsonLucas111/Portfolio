import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Techs } from "types/techs";
import { AboutMe, Contect, TechsBox } from "./styles";

const About = () => {
  const hardSkills = `
    HTML5, CSS3, JavaScript, TypeScript, React, Styled-Components, Node, MySQL, Jest e outras...
  `;
  const softSkills = `
    Atenção aos detalhes, resolução de problemas, integridade, trabalho em equipe, amar o que faço e outras...
  `;

  const techs: Techs[] = [
    {
      name: "html",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "css",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "javascript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "typescript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "react",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "materialui",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "node",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "mysql",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "jest",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "sass",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
  ];

  return (
    <Contect id="about">
      <AboutMe>
        <Typography variant="h5">Sobre mim</Typography>
        <Typography variant="body1" className="aboutMe">
          Olá, eu sou o Gledson Lucas, há algum tempo comecei a estudar
          programação, mas sempre fui apaixonado pelo mundo da tecnologia.
          Atualmente estou cursando SPI (Sistemas Para Internet) no IFMA
          (Instituto Federal do Maranhão). Estou sempre em busca do
          aprimoramento das minhas{" "}
          <Tooltip title={hardSkills}>
            <Typography variant="body1" className="skills">
              Hard Skills
            </Typography>
          </Tooltip>{" "}
          e minhas{" "}
          <Tooltip title={softSkills}>
            <Typography variant="body1" className="skills">
              Soft Skills
            </Typography>
          </Tooltip>
        </Typography>
      </AboutMe>
      <TechsBox>
        <Typography variant="h5" className="techsText">
          Tecnologias
        </Typography>
        {techs.map((tech: Techs) => {
          return (
            <Tooltip title={tech.name} className="techs" key={tech.name}>
              <img alt={tech.name} src={tech.img} />
            </Tooltip>
          );
        })}
      </TechsBox>
    </Contect>
  );
};

export default About;
