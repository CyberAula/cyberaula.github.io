import React from "react";
import Link from "next/link";
const routes = [
  { route: "/", title: "Home" },
  { route: "/projects", title: "Projects" },
  { route: "/research", title: "Research" },
  { route: "/team", title: "Team" },
  { route: "/tools", title: "Tools" },
  { route: "/about", title: "Contact" },
];
export default function Footer(props) {
  return (
    <footer>
      <div className="footer_left">
        <div className="footer_title">
          <h1>CyberAula</h1>
        </div>
        <div className="footer_subtitle">
          <h5>Innovative educational Group </h5>
          <h5>Universidad Politécnica de Madrid</h5>
        </div>
        <div className="footer_email">innovacion.educativa@upm.es</div>
      </div>
      <div className="footer_mid">
        <div className="footer_sections">
          {" "}
         
          <nav>
            <ul>
				<li className="sections_title smallcaps">sections</li>
              {routes.map((route, index) => (
                <li
                  key={index}
                  className={route.route === props.route ? "li-selected" : ""}
                >
                  <Link href={route.route}>{route.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="socials">
          <div className="socials_title smallcaps">social media</div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="footer_right">
        <div className="copyright">
          {" "}
          <ul>
            <li>2024 &copy;</li>
            <li>
              <a
                rel="noopener noreferrer"
                href="http://www.dit.upm.es/"
                target="_blank"
              >
                Department of Telematic Systems Engineering
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="http://www.etsit.upm.es/de.html"
                target="_blank"
              >
                ETSI Telecomunicación
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="http://www.upm.es/internacional"
                target="_blank"
              >
                UPM
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
