import { DefaultTheme } from "styled-components";
import { COLORS } from "./colors";

export const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  palette: COLORS.light,
};

export const darkTheme: DefaultTheme = {
  borderRadius: "4px",
  palette: COLORS.dark,
};
