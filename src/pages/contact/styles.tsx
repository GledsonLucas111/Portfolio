import Box from "@mui/material/Box";
import styled from "styled-components";

export const Main = styled(Box)`
  height: 100vh;
  overflow: hidden;
`;
export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  gap: 50px;

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
    }
    @media screen and (max-width: 300px) {
      .MuiIconButton-root {
      font-size: 20px;
      margin: 0 0.1rem;
    }
    }
  }
  @media screen and (max-width: 570px) {
    .typografy_1 {
      font-size: 17px;
    }
    .typografy_2 {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 570px) and (max-height: 680px) {
    .typografy_1 {
      font-size: 15px;
    }
    .typografy_2 {
      font-size: 14px;
    }
  }
`;

export const Form = styled(Box)`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .MuiTextField-root {
    background-color: #f2f2f2;
    border-radius: 5px 5px 0 0;
  }
  @media screen and (max-width: 570px) {
    width: 80%;
  }
`;

export const sendButton = {
  width: "100%",
  textAlign: "center",
  backgroundColor: "#f2f2f2",
  borderRadius: "0 0 5px 5px",
  "&:hover": {
    backgroundColor: "#f2f2f2"
  }
}