import { createTheme } from "@mui/material/styles";
import { primaryColor } from "constants/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h6: {
      fontSize: 18,
    }
  }
});
