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
      margin-bottom: 1rem;
      border: 5px solid #fff;
      cursor: pointer;
      transition: transform 350ms ease-in-out;
      &:hover {
        transform: scale(0.98);
      }
      @media screen and (max-width: 440px) {
        min-width: 330px;
        min-height: 270px;
      }
      .CardImg {
        width: 100%;
        max-height: 30vh;
        object-fit: cover;
      }
    }
  }
`;
