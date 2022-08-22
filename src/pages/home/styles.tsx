import Box from "@mui/material/Box";
import { neutralColor } from "constants/colors";
import styled from "styled-components";

export const HomeComponent = styled.div`
  height: 100vh;
`;

export const BoxApresentation = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .presentation {
    font-size: 3.2rem;
    margin: 0rem 1rem 1rem;
    color: #fff;
    white-space: nowrap;
  }
  .description {
    color: ${neutralColor};
  }

  @media screen and (max-width: 850px) {
    .presentation {
      transition: font-size 200ms ease-in-out;
      font-size: 5.5vw;
    }
    .description {
      font-size: 3vw;
    }
  }
`;

export const BoxAnimation = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  .animation {
    width: 30vw;
  }
  @media screen and (max-width: 1150px) {
    .animation {
      width: 45vw;
    }
  }
  @media screen and (max-width: 600px) {
    .animation {
      width: 85vw;
    }
  }
`;

export const buttonCV = {
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

