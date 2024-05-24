"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProjectCard from "@/components/projectCard";
import { myprojectCards } from "@/constants/projectsCards.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const [projects, setProjects] = useState(myprojectCards);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects">
      <Header route={"/projects"} />
      <div className="banner">
        <h1> Projects</h1>
      </div>
      <main>
        
        <section className="lg:mx-36 md:mx-14 sm:mx-8 lg:my-12 md:my-8 sm:my-4 xl:mx-44 2xl:mx-60">
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
