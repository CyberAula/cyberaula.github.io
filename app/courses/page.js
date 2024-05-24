"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
// aquí habría que importar los cursos
import { mycourses } from "@/constants/courses.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Courses() {
  const [courses, setCourses] = useState(mycourses);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="courses">
      <Header route={"/courses"} />
      <div className="banner">
        <h1>Courses</h1>
      </div>
      <main>
        <section className="lg:mx-36 md:mx-14 sm:mx-8 lg:my-12 md:my-8 sm:my-4 xl:mx-44 2xl:mx-60">
  

          <div className=" grid gap-4 md:grid-cols-2 sm:grid-cols-1">
            {courses.map(({ date, gradient, edition, title, description, route }) => {
              return (
                <div
                  key={title}
                  className={`rounded-lg px-6 py-4 course  ${gradient}`}
                >
                  <div className="course_main transition">
                    <div className="course_content">
                      <div className="card_container_top">
                        <div className="flex gap-2">
                        <div className="year_tag">
                          <div>{date}</div>
                        </div>
                        <div className="year_tag">
                          <div> {edition}</div>
                        </div>
                        </div>
                        <div className="course_route">
                        <CreateLink route={route}>
                        <FontAwesomeIcon className="award_icon" icon={faArrowRight} />
                          <div>Ir al curso</div>
                        </CreateLink>
                        </div>
                      </div>
                      <div className="course_text_block">
                        <div className="course_title">
                          <h4>{title}</h4>
                        </div>
                        <div className="course_description">
                          <small> {description}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
