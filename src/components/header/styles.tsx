import styled from "styled-components";
import Box from "@mui/material/Box";
import { neutralColor } from "constants/colors";
import { PropActive } from "types/styles";

export const Component = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0rem 0rem 2rem;
  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export const BoxLogo = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  cursor: pointer;
  transition: filter 150ms ease-in-out;
  -webkit-animation: slide-top 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045)
    reverse both;
  animation: slide-top 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) reverse both;
  &:hover {
    filter: brightness(75%);
  }
  img {
    width: 40px;
  }
  .typografy-logo {
    color: ${neutralColor};
    opacity: 1;
    transition: opacity 350ms ease-in-out;
  }

  @media screen and (max-width: 500px) {
    padding-left: 20px;
    cursor: default;
    &:hover {
      filter: none;
    }
    .typografy-logo {
      pointer-events: none;
      opacity: 0;
    }
    img {
      cursor: pointer;
      &:hover {
        filter: brightness(75%);
      }
    }
  }
  @media screen and (max-width: 400px) {
    .typografy-logo {
      display: none;
    }
  }
`;

export const StyledBurguer = styled.div.attrs((props: PropActive) => ({
  active: props.active,
}))<PropActive>`
  @media screen and (max-width: 600px) {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 3vh;
    right: 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    cursor: pointer;
    z-index: 20;
    overflow: hidden;
    -webkit-animation: slide-top 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045)
      reverse both;
    animation: slide-top 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) reverse
      both;
    div {
      width: 2rem;
      height: 0.25rem;
      background-color: #fff;
      border-radius: 10px;
      transform-origin: 3px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${(props) => (props.active ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${(props) =>
          props.active ? "translateX(100%)" : "translateX(0)"};
        opacity: ${(props) => (props.active ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${(props) =>
          props.active ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
`;

export const BoxList = styled(Box).attrs((props: PropActive) => ({
  active: props.active,
}))<PropActive>`
  display: flex;
  gap: 20px;
  z-index: 19;

  .typeList {
    cursor: pointer;
    color: ${neutralColor};
    transition: color 150ms ease-in-out;
    &:hover {
      color: #fff;
    }
    -webkit-animation: slide-top 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045)
      reverse both;
    animation: slide-top 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) reverse
      both;
  }

  @media screen and (max-width: 600px) {
    width: 30vh;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    white-space: nowrap;
    ${(props) =>
      props.active
        ? `
        
    flex-direction: column;
    align-items: center;
    background: #F61E3B;
    padding-top: 6rem;
    transition: all 0.3s ease-in-out;
    transform: translateX(0);
    
    .typeList {
      display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 2em;
        color: #fff;
        transition: background 150ms ease-in-out;
        &:hover {
          background: #f8304b;
        }
    }
    `
        : `
    flex-direction: row;
    background: transparent;
    padding-top: 2rem;
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
    `};
  }
`;
