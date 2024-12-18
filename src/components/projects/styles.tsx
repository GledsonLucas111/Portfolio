import styled from "styled-components";
import Box from "@mui/material/Box";

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7rem 0 0;
`;
export const BoxProjects = styled(Box)`
  max-width: 80vw;
  @media screen and (max-width: 440px) {
    max-width: 90vw;
  }
  margin: 2rem 0 0;
  .corosel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      height: 10px;
    }
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f0f0f0;
      border-radius: 1px;
      margin: 0 1rem;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #f61e3b;
      border-radius: 1px;
    }

    gap: 50px;
    .MuiCard-root {
      min-width: 350px;
      min-height: 310px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      border: 5px solid #fff;
      
      @media screen and (max-width: 380px) {
        min-width: 90vw;
        min-height: 200px;
      }
      .CardImg {
        width: 100%;
        max-height: 30vh;
        object-fit: cover;
      }
    }
  }
`;

export const linkButton = {
  backgroundColor: "#F61E3B",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#f8304b",
  },
};
