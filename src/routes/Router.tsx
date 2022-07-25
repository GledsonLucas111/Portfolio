import Home from "pages/home";
import Error from "pages/error";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
