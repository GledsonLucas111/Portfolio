import Box from "@mui/material/Box";
import styled from "styled-components";

export const Component = styled(Box)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  height: 45vh;
  gap: 50px;
  div {
    width: auto;

    .MuiButton-root {
      color: #fff;
      min-width: 100px;
      font-size: 1.5rem;
      margin: 0 1rem 0;
    }
  }
`;

export const Form = styled(Box)`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .MuiTextField-root {
    background-color: #f2f2f2;
    border-radius: 5px 5px 0 0;
  }
`;
