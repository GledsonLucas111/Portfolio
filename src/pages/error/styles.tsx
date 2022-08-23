import Box from "@mui/material/Box";
import { neutralColor } from "constants/colors";
import styled from "styled-components";

export const Component = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  gap: 10px;

  .typeError {
    color: #F61E3B;
    font-size: 1.3rem;
    padding: 0 0.5rem;
    text-align: center;
  }
  .error {
    color: ${neutralColor};
    font-size: 1.3rem;
    padding: 0 0.5rem;
    text-align: center;
  }
`;

export const buttonBack = {
  color: "#fff",
  border: "1px solid transparent",
  backgroundColor: "#F61E3B",
  transition: "boxShadow 0.5s ease-in-out",
  "&:hover": {
    border: "1px solid transparent",
    backgroundColor: "#F61E3B",
    animation:
      "shadow-pop-br 0.2s cubic-bezier(0.470, 0.000, 0.745, 0.715) both",
  },
};
