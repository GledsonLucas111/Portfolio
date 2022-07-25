import { createTheme } from "@mui/material";
import { primaryColor } from "constants/colors";

const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor
      }
    },
  });
  
  export default theme;