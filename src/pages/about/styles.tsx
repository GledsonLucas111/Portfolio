import Box from "@mui/material/Box";
import styled from "styled-components";

export const Contect = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  overflow: hidden;
  div {
    text-align: center;

    .techs {
      width: 70px;
      padding: 0px 10px 0;
    }
  }
  .textHeader {
    margin: 0 0 2rem;
    color: #fff;
  }
  .aboutMe {
    margin: 0 0 2rem;
    font-size: 18px;
    color: #fff;
    width: 80vw;
    text-align: center;
  }
  .link {
    color: #fe7e02;
  }
  .skills {
    display: inline;
    color: #66e499;
    cursor: pointer;
  }
  .techsText {
    text-align: center;
    margin: 0 0 2rem;
    color: #fff;
  }
  @media (max-width: 490px) {
    div {
    .techs {
      width: 50px;
      padding: 0px 5px 0;
    }
  }
  .textHeader {
    margin: 0 0 1rem;
  }
  .aboutMe {
    margin: 0 0 1rem;
    font-size: 15px;
    width: 90vw;
  }
  }
`;
