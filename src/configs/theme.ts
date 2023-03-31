import { DefaultTheme } from "styled-components";
import { COLORS } from "./colors";
import { breakpoints } from "./sizes";

export const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  palette: COLORS.light,
  breakpoints: breakpoints,
};

export const darkTheme: DefaultTheme = {
  borderRadius: "4px",
  palette: COLORS.dark,
  breakpoints: breakpoints,
};
