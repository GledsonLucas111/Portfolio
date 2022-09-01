import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BoxProjects, Content } from "./styles";
import UseRequestData from "hooks/UseRequestData";
import ModalProject from "./modalProject";

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const [idProject, setIdProject] = React.useState("");
  const [project] = UseRequestData([], `/project`);
  
  const openModal = (open: boolean, id: string) => {
    setOpen(open)
    setIdProject(id)
  }

  return (
    <Content>
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
            {project?.map((project: any) => {
              return (
                <Card key={project.id} onClick={()=> openModal(true, project.id)}>
                  <div className="CardImg">
                  <CardMedia
                    component="img"
                    height="190"
                    sx={{width: "100%"}}
                    image={project.img1}
                    alt={project.name}
                  />
                  </div>
                  <CardContent>
                    <Typography variant="h6">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </BoxProjects>
      <ModalProject open={open} setOpen={setOpen} id={idProject}/>
    </Content>
  );
};

export default Projects;
