import Box from "@mui/material/Box";
import styled from "styled-components";

export const Main = styled(Box)`
  overflow: hidden;
  margin: 7rem 0 0;
`;
export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  gap: 50px;
  .typografy_2 {
    font-size: 18px;
    width: 75vw;
  }
  .icons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .MuiIconButton-root {
      text-align: center;
      font-size: 30px;
      margin: 0 0.3rem;
      color: #fff;
      transition: filter 150ms ease-in-out;
      &:hover {
        filter: brightness(75%);
      }
    }
    @media screen and (max-width: 300px) {
      .MuiIconButton-root {
      font-size: 20px;
      margin: 0 0.1rem;
    }
    }
  }
  @media (max-width: 490px) {
    .typografy_2 {
      font-size: 15px;
      width: 90vw;
    }
  }
`;

export const Form = styled(Box)`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .MuiTextField-root {
    background-color: #ffffff;
    border-radius: 5px 5px 0 0;
    
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const sendButton = {
  width: "100%",
  textAlign: "center",
  backgroundColor: "#f0f0f0",
  borderRadius: "0 0 5px 5px",
  "&:hover": {
    backgroundColor: "#f0f0f0"
  }
}