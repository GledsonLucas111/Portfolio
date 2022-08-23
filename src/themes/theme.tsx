import { createTheme } from "@mui/material/styles";
import { primaryColor, secondaryColor } from "constants/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h6: {
      fontSize: 18,
    }
  }
});
