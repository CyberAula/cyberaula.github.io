import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-solid-svg-icons";
import {
  faGit,
  faGithubAlt,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next';


export default function Footer(props) {
  const { t } = useTranslation();
  const routes = [
    //{route: "/", title: "Home"},
    { route: "/research", title: t('nav.item') },
    { route: "/courses", title: t('nav.item2') },
    { route: "/tools", title: t('nav.item3') },
    { route: "/projects", title: t('nav.item4') },
    { route: "/team", title: t('nav.item5') },
    { route: "/about", title: t('nav.item6') },
  ];
  return (
    <footer>
      <div className="footer_left md:mb-0 mb-8">
        <div className="footer_title">
          <h1>CyberAula</h1>
        </div>
        <div className="footer_subtitle">
          <h5 className="font-medium">
            Innovative educational Group <br></br>
            Universidad Politécnica de Madrid
          </h5>
        </div>
        <div className="flex">
          <FontAwesomeIcon className="mr-3" icon={faEnvelope} size="lg" />{" "}
          <div className="footer_email">innovacion.educativa@upm.es</div>
        </div>
      </div>
     
        <div className="footer_mid_1 md:mb-0 mb-8">
          {" "}
          <nav>
            <ul>
              <li className="sections_title smallcaps text-left mb-4">
              {t('footer.title1')}
              </li>
              {routes.map((route, index) => (
                <li
                  key={index}
                  className={
                    route.route === props.route
                      ? "li-selected text-left mb-2 font-medium md:text-"
                      : "text-left mb-2 font-medium"
                  }
                >
                  <Link className="font-medium" href={route.route}>
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer_mid_2">
          <div className="socials">
            <div className="socials_title smallcaps mb-4 text-left">
            {t('footer.title2')}
            </div>
            <ul>
              <li className="mb-2 text-left ">
                <a className="font-medium">
                  <FontAwesomeIcon className="mr-2 " icon={faGithubAlt} />
                  Github
                </a>
              </li>
              <li className="mb-2 text-left">
                <a className="font-medium">
                  <FontAwesomeIcon className="mr-2 " icon={faYoutube} />
                  Youtube
                </a>
              </li>
              <li className="mb-2 text-left">
                <a className="font-medium">
                  <FontAwesomeIcon className="mr-2 " icon={faTwitter} />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      
      <div className="footer_right md:max-w-64 size-full">
        <div className="copyright">
          {" "}
          <ul>
            <li className="md:mb-4 mb-2">2024 &copy;</li>
            <li className="md:mb-4 mb-2">
              <a className="font-normal text-base"
                rel="noopener noreferrer"
                href="http://www.dit.upm.es/"
                target="_blank"
              >
                Department of Telematic Systems Engineering
              </a>
            </li>
            <li className="md:mb-4 mb-2">
              <a
                className="font-normal text-base"
                rel="noopener noreferrer"
                href="http://www.etsit.upm.es/de.html"
                target="_blank"
              >
                ETSI Telecomunicación
              </a>
            </li>
            <li>
              <a
                className="font-normal text-base"
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
