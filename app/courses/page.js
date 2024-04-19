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
      <main>
        <section className="m-40">
          <div>courses filter</div>


          <div className=" grid gap-4 grid-cols-2">
            {courses.map(({ gradient, title, description, route }) => {
              return (
                <div
                  key={title}
                  className={`rounded-lg course  ${gradient}`}
				
                >

                  <div className="course_img">
                    <CreateLink route={route}>
                     {/*} <img
                        className="course_img"
                        alt={"Project Logo"}
                        src={logo}
			  />*/}
                    </CreateLink>

				  </div>
                  <div className="course_main">
                    <CreateLink route={route}>
                      <div className="course_content">
                        <div className="project_title">
                          <h2>{title}</h2>
                        </div>
                        <div className="project_description description">
                          <h5>{description}</h5>
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
