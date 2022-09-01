import Box from "@mui/material/Box";
import styled from "styled-components";

export const BoxModal = styled(Box)`
  position: absolute;
  width: 80vw;
  height: 90vh;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 3px;
  .topModal {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5em 0;
  }
  .MuiCard-root {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .techs {
    display: flex;
    justify-content: center;

    gap: 10px;
    color: #fff;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const closeButton = {
  position: "absolute",
  top: -1,
  right: -1,
  backgroundColor: "#F61E3B",
  color: "#FFFFFF",
  fontSize: 20,
  "&:hover": {
    backgroundColor: "#f8304b",
  },
};
