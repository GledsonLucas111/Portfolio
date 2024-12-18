import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BoxProjects, Content, linkButton } from "./styles";
import UseRequestData from "hooks/UseRequestData";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Project } from "types/project";

const Projects = () => {
  const [project] = UseRequestData([], `/project`);
  return (
    <Content id="projects">
      <div>
        <Typography
          variant="h5"
          color="secondary"
          align="center"
          className="typografy_1"
        >
          Projetos
        </Typography>
      </div>
      <BoxProjects>
        <div className="corosel">
          {project.map((project: Project) => {
            return (
              <Card key={project.id}>
                <div className="CardImg">
                  <CardMedia
                    component="img"
                    height="190"
                    sx={{ width: "100%" }}
                    image={project.img ? project.img : "carregando"}
                    alt={project.name}
                  />
                </div>
                <CardContent>
                  <Typography variant="h6">
                    {project.name ? project.name : "carregando"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={project.repository}
                    target="_blank"
                    sx={linkButton}
                  >
                    Repositótio
                  </Button>
                  <Button
                    size="small"
                    href={project.deploy}
                    target="_blank"
                    sx={linkButton}
                  >
                    projeto
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </BoxProjects>
    </Content>
  );
};

export default Projects;
