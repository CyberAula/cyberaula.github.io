import Page from "./../app/page";
// import About from "./../app/about/page";

// import Team from "./../app/team/page";
// import Research from "./../app/research/page";
import Contact from "./../app/contact/page";
import { Route, Routes } from "react-router-dom";

export const routes = [
    { route: "/", key: "nav.item1", page:<Page/>, active: true },
    // { route: "/about", key: "nav.item2", page:<About/>, active: true },

    // { route: "/team", key: "nav.item3", page:<Team/>, active: true },
    // { route: "/research", key: "nav.item4", page:<Research/>, active: true },
    { route: "/contact", key: "nav.item6", page:<Contact/>, active: true },
  ];

export const activeRoutes = routes
  .filter(route => route.active)  // Filtrar solo las rutas activas