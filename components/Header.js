import React from 'react';
import Link from 'next/link';
import {useState, useEffect} from 'react';


const routes = [
  {route: "/", title: "Home"},
  {route: "/projects", title: "Projects"},
  {route: "/research", title: "Research"},
  {route: "/team", title: "Team"},
  {route: "/about", title: "About"}
]
export default function Header (props) {
  const [state, setState] = useState({open: false});

  return (
    <header className="nav_bar" id="header_home">
    <a href="/">
      <div className="imagotype">
        <img class="logoheader" src="/assets/img/group-logo-only.png" alt="logo"/>
        <div className="logotype">
          CYBERAULA
        </div>
      </div>
    </a>
    <div className="menu_icon" >
    <i className={"material-icons show " + (state.open ? "responsive-hidden":"responsive-shown")}  
    onClick={() => {setState({open: !state.open})}}>
      menu
      </i><i className={"material-icons close " + (state.open ? "responsive-shown":"responsive-hidden")} 
      onClick={() => {setState({open: !state.open})}}>
        close
        </i></div>

    <div className={"menu "+ (state.open ? "responsive-shown":"responsive-hidden")}>
      <ul>
        {routes.map((route,index) => <li key={index} className={route.route === props.route ? "li-selected":""}>
        <Link href={route.route}>{route.title}</Link></li>)}
      </ul>
    </div>

  </header>

  );

}
