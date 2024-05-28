"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';

export default function About (props) {
    const { t } = useTranslation();
		return (
			<div className="about">
			<Header route={"/about"}/>
            <div className="banner">
        <h1>{t('contact.title')}</h1>
      </div>
    <main className=" sm:mx-2 md:mx-14  lg:mx-36 xl:mx-44 2xl:mx-60">
        <section className="about_description">

            <p>We have gathered a long teaching experience at the University. Our main research interests are focused
                on the last technologies in Internet and the WWW, such as HTML5. We have extensive experience in
                video-conferencing systems, social networks websites and e-Learning. Our latest participation in
                research projects include ongoing EU-founded projects such as Global Excursions and FI-WARE</p>

        </section>

            <h2>{t('contact.title2')}</h2>
        <section className="location">

            <div className="col1">
                <div className="location_map map-responsive">
                    <iframe title="maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0248536844406!2d-3.7286225846430923!3d40.45258687936105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422834b7a8fb4d%3A0x2a3c66a12ada73f9!2sUPM+Escuela+T%C3%A9cnica+Superior+de+Ingenieros+de+Telecomunicaci%C3%B3n!5e0!3m2!1ses!2ses!4v1561459882911!5m2!1ses!2ses"
                        width="600" height="450" frameBorder="0" style={{border:0}} allowfullscreen></iframe>
                </div>
            </div>
            <div className="col2">
                <div className="location_info">
                    <h2>E.T.S. DE INGENIEROS DE TELECOMUNICACIÓN</h2>
                    <h3>Av. Complutense, 30, 28040 Madrid
                        Edificio B</h3>
                </div>
                <div className="contact">
                    {/* <h2>Contact</h2> */}
                    <ul>
                        <li>
                            <h3>E-mail</h3><p>gi.internetng@upm.es</p>
                        </li>
                        <li>
                            <h3>{t('contact.listTitle2')}</h3><p>91 336 73 31</p>
                        </li>
                        <li>
                            <h3>Fax</h3><p>91 336 73 33</p>
                        </li>
                    </ul>
                </div>
            </div>

        </section>

    </main>
    <Footer/>
</div>
		);    

}