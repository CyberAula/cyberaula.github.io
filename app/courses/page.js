"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
// aquí habría que importar los cursos
import { mycourses } from "@/constants/courses.js";

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
        <section className="lg:m-28 md:m-14 sm:m-0">
          <div>courses filter</div>

          <div className=" grid gap-4 md:grid-cols-2 sm:grid-cols-1">
            {courses.map(({ date, gradient, title, description, route }) => {
              return (
                <div
                  key={title}
                  className={`rounded-lg px-6 py-4 course  ${gradient}`}
                >
                  
                  <div className="course_main transition">
                    <CreateLink route={route}>
                      <div className="course_content">
                        <div className="year_tag">
                          <p>{date}</p>
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
                    </CreateLink>
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
