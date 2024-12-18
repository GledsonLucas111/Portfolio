import { background } from "constants/colors";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html, body{
    height: 100vh;
    scroll-behavior: smooth;
    background-color: ${background};
    ::-webkit-scrollbar {
      height: 10px;
    }
    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-track {
      background: #f0f0f0;
      border-radius: 1px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #F61E3B;
      border-radius: 1px;
    }
    @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }

    @keyframes shadow-pop-br {
    0% {
      box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
      transform: translateX(0) translateY(0);
    }
    100% {
      box-shadow: 1px 1px #fff, 2px 2px #fff, 3px 3px #fff,
        4px 4px #fff;
      transform: translateX(-4px) translateY(-4px);
    }
  }
  }

`;
