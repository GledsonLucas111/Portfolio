import Home from "pages/home";
import Error from "pages/error";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "pages/about";
import Projects from "pages/projects";
import Contact from "pages/contact";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/sobre"} element={<About />} />
        <Route path={"/projetos"} element={<Projects />} />
        <Route path={"/contatos"} element={<Contact />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
