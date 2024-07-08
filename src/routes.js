import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Erro404} from "./Paginas/404/404";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import Template from "./componentes/Template";
import FormatarMenu from "json/menu.json"
import React, { lazy, Suspense } from 'react';
import Post from "./Paginas/Post";
import ScrollToTop from "./componentes/ScrollToTop";
const importComponent = (componentName) => {
    return lazy(() => import(`./Paginas/${componentName}`));
};
function AppRoutes() {
  return (
      <BrowserRouter>
          <ScrollToTop/>
          <Menu/>
            <Routes>
                <Route path="/" element={<Template/>}>
                    {FormatarMenu.map((menu) => {
                        const Component = importComponent(menu.component);
                        return (
                            <Route
                                key={menu.id}
                                path={menu.url}
                                element={
                                    <Suspense>
                                        <Component />
                                    </Suspense>
                                }
                            />
                        );
                    })}
                </Route>
                <Route path="posts/:id/*" element={<Post />} />
              <Route path="*" element={<Erro404 />} />
            </Routes>
          <Rodape/>
      </BrowserRouter>
  );
}

export default AppRoutes;
