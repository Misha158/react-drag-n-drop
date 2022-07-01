import { createGlobalStyle } from "styled-components";
import trelloBg from "../../assets/trello-bg.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${trelloBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
