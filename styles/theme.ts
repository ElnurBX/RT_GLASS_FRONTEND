import 'styled-components';
import { DefaultTheme } from 'styled-components';

// styled-components için tema tipini genişletiyoruz
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      mainColor: string;
      black: string;
      secondaryText?: string; 
      starColor?: string;
      white?: string; 
    };
  }
}

// Tema nesnesi
export const theme: DefaultTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#ff4081",
    text: "#333",
    mainColor: "#184D3E",
    black: "#151411",
    secondaryText: "#1EAC82",
    starColor: "#34A583", 
    white: "#FFFFFF", 
  },
};