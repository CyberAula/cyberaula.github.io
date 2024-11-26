"use client";

import { useTranslation } from "react-i18next";

import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { MobileIcon } from "@radix-ui/react-icons";
import { SewingPinIcon } from "@radix-ui/react-icons";
import { FaceIcon } from "@radix-ui/react-icons";
import Header from "@/components/core/Header";

// icons
import { PiPhoneFill, PiAtBold, PiMapPinFill } from 'react-icons/pi';


export default function About(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <div className={"about page_"+ currentLang}>
      <div className="banner px-4 sm:px-8 md:px-14 md:py-2 lg:px-24 lg:py-4 xl:px-28 xl:py-4 2xl:px-32 2xl:py-6">
        <Heading level="h1">{t("contact.title")}</Heading>
      </div>
      <main className="xs:my-4 sm:mx-8 md:mx-14 lg:mx-36 xl:mx-44 2xl:mx-60 2xl:my-20 xl:my-16 lg:my-12 md:my-8 sm:my-4 xs:my-2">
        <section className="md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg about_description text-slate-700">
          <p>
          {t("contact.body")}
          </p>
        </section>
        <Heading level="h4" className={"mt-8"}>{t("contact.title2")}</Heading>

        <section className="flex flex-wrap sm:flex-nowrap gap-4 justify-around mt-6">

          <div className="flex flex-col h-fit w-1/2">
            <div className="contact_content ">
              <ul  className="text-slate-700">
                <li className="pb-4">
                  <Heading level="h5">
                    <PiAtBold/>
                    E-mail
                  </Heading>
                  <p>enrique.barra@upm.es</p>
                </li>
                <li className="pb-4">
                  <Heading level="h5">
                    <PiPhoneFill/>
                    {t("contact.listTitle2")}
                  </Heading>
                  <p>91 336 73 31</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col h-full w-1/2">
            <Heading level="h5">
              <PiMapPinFill/>
              {t("contact.title3")}
            </Heading>
            <div className="flex flex-col h-fit">
              <div className="flex justify-center items-center overflow-hidden">
                <iframe
                  title="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0248536844406!2d-3.7286225846430923!3d40.45258687936105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422834b7a8fb4d%3A0x2a3c66a12ada73f9!2sUPM+Escuela+T%C3%A9cnica+Superior+de+Ingenieros+de+Telecomunicaci%C3%B3n!5e0!3m2!1ses!2ses!4v1561459882911!5m2!1ses!2ses"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowfullscreen
                ></iframe>
              </div>
              <div className="mt-6 gap-4">
                <p>E.T.S. DE INGENIEROS DE TELECOMUNICACIÓN</p>
                <p>Av. Complutense, 30, 28040 Madrid Edificio B</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
