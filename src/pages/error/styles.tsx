import Box from "@mui/material/Box";
import { neutralColor } from "constants/colors";
import styled from "styled-components";

export const Component = styled(Box)`
  height: 100vh;
`;
export const HeaderError = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .header {
    padding-left: 30px;
    color: #fff;
  }
`;
export const InfoError = styled(Box)`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 650px) {
    .error {
      font-size: 5.8vw;
    }
    .typeError {
      font-size: 3.8vw;
      p {
        display: inline;
      }
    }
  }
  .left {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 30px;
    .error {
      color: #fff;
    }
    .typeError {
      color: ${neutralColor};
    }
  }
  .rigth {
    width: 40vw;
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
