import { ThemeProvider } from "@mui/material";
import Router from "routes/Router";
import GlobalStyle from "themes/global";
import theme from "themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
