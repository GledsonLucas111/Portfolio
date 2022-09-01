import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import UseRequestData from "hooks/UseRequestData";
import { BoxModal, closeButton } from "./styles";
import { Box, CircularProgress } from "@mui/material";
import { CgClose } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

const ModalProject = (props: any) => {
  const { open, setOpen, id } = props;
  const [project, loading] = UseRequestData([], `/project/${id}`);

  const imgs: string[] = [];

  imgs.push(project?.img1, project?.img2, project?.img3);

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxModal>
          {loading ? (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Card>
                <div className="topModal">
                  <Typography variant="h5" color="#000">
                    {project?.name}
                  </Typography>
                  <Button onClick={() => setOpen(false)} sx={closeButton}>
                    <CgClose />
                  </Button>
                </div>

                  <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                  >
                    {imgs.map((img) => {
                      return (
                        <SwiperSlide key={img}>
                          <CardMedia
                            component="img"
                            height="500"
                            image={img}
                            alt={project.name}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                <CardContent>
                  <div className="techs">
                    {project?.technologies?.split(",").map((tech: string) => {
                      return (
                        <Button
                          sx={{
                            cursor: "default",
                            backgroundColor: "#3BC974",
                            "&:hover": {
                              backgroundColor: "#3BC974",
                            },
                          }}
                          color="secondary"
                        >
                          {tech.toUpperCase()}
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={project.repository}
                    target="_blank"
                  >
                    Repositótio
                  </Button>
                  <Button size="small" href={project.deploy} target="_blank">
                    projeto
                  </Button>
                </CardActions>
                <Typography gutterBottom variant="h6" color="#000">
                  {project?.description}
                </Typography>
              </Card>
            </>
          )}
        </BoxModal>
      </Modal>
    </>
  );
};

export default ModalProject;
