import React from 'react';
import Link from 'next/link';
import {useState, useEffect} from 'react';


const routes = [
  {route: "/", title: "Home"},
  {route: "/projects", title: "Projects"},
  {route: "/research", title: "Research"},
  {route: "/team", title: "Team"},
  {route: "/tools", title: "Tools"},
  {route: "/about", title: "Contact"}
]
export default function Header (props) {
  const [state, setState] = useState({open: false});

  return (
    <header className="nav_bar" id="header_home">
    <a href="/">
      <div className="imagotype">
        <div className="isotype">
        <svg width="45" height="28" viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1088_2657)">
<path d="M22.137 22.556L34.0693 22.5395V27.6891H17.0219V14.0008C17.0234 6.46767 23.1291 0.361938 30.6607 0.361938C38.1923 0.361938 44.2981 6.46767 44.2981 13.9993V27.6876H39.1844V14.0143C38.7357 2.70937 22.5858 2.71088 22.137 14.0143V22.5545V22.556Z" fill="#5441FF"/>
<path d="M28.0026 14.7992C28.9443 14.7992 29.7077 14.0359 29.7077 13.0942C29.7077 12.1525 28.9443 11.3892 28.0026 11.3892C27.0609 11.3892 26.2976 12.1525 26.2976 13.0942C26.2976 14.0359 27.0609 14.7992 28.0026 14.7992Z" fill="#5441FF"/>
<path d="M20.8162 2.28612C18.7435 1.03285 16.318 0.310913 13.7184 0.310913C6.14175 0.310913 0 6.43916 0 13.9993C0 21.5594 6.14175 27.6876 13.7184 27.6876H15.3424V22.6326H13.6854C8.95147 22.6326 5.11513 18.7947 5.11513 14.0623C5.11513 9.32993 8.95297 5.49208 13.6854 5.49208C15.0167 5.49208 16.2774 5.79527 17.4016 6.3371L17.4076 6.3401C18.2632 4.84218 19.0481 3.70299 20.8162 2.28462V2.28612Z" fill="#FF8A00"/>
<path d="M15.3424 18.8427C14.8216 19.0198 14.2647 19.1144 13.6854 19.1144C10.8351 19.1144 8.52371 16.803 8.52371 13.9527C8.52371 11.1025 10.8351 8.79108 13.6854 8.79108C14.5424 8.79108 15.3514 8.9997 16.0628 9.37043C15.5945 10.8383 15.3424 12.4023 15.3424 14.0248V18.8412V18.8427Z" fill="#FF8A00"/>
</g>
<defs>

</defs>
</svg>

        </div>
        <div className="logotype">
          cyberaula
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
