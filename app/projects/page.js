"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProjectCard from "@/components/projectCard";
import { myprojectCards } from "@/constants/projectsCards.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
import useHeaderOffset from "@/hook/useHeaderOffset";

//SEO
import SEO from "@/components/SEOWrapper";
import StructuredData from "@/components/StructuredData";

//metadata for SEO
import { getPageMetadata } from "@/constants/metadata";
import { projectsPageSchema } from "@/constants/schemas";

export default function Projects() {
  // const [projects, setProjects] = useState(myprojectCards);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const headerOffset = useHeaderOffset();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const metadata = getPageMetadata('projects', currentLang);
  

  return (
    <div className={"projects page_"+ currentLang}>
       <SEO 
              title={metadata.title}
              description={metadata.description}
              keywords={metadata.keywords}
            />
            <StructuredData data={projectsPageSchema} />
      <Header route={"/projects"} />
      <main style={{ paddingTop: `${headerOffset}px` , margin: 0}}>
      <div className="banner px-4 sm:px-8 md:px-14 md:py-2 lg:px-24 lg:py-4 xl:px-28 xl:py-4 2xl:px-32 2xl:py-6">
        <h2> {t('projects.title')}</h2>
      </div>
        
        <section className="lg:mx-36 md:mx-14 sm:mx-14 mx-12 my-12 sm:my-12 md:my-8 lg:my-12 xl:my-16 2xl:my-20 xl:mx-44 2xl:mx-60">
          <ProjectCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}

const CreateLink = (props) => {
  return props.route.match("http") ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link href={props.route}>{props.children}</Link>
  );
};
