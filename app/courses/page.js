"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
// aquí habría que importar los cursos
import { mycourses } from "@/constants/courses.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import useHeaderOffset from "@/hook/useHeaderOffset";


//SEO
import SEO from "@/components/SEOWrapper";
import StructuredData from "@/components/StructuredData";

//metadata for SEO
import { getPageMetadata } from "@/constants/metadata";
import { coursesPageSchema } from "@/constants/schemas";


export default function Courses() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [courses, setCourses] = useState(mycourses);
  const headerOffset = useHeaderOffset();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   const metadata = getPageMetadata('courses', currentLang);

  return (
    <div className={"courses page_" + currentLang}>
        <SEO 
              title={metadata.title}
              description={metadata.description}
              keywords={metadata.keywords}
            />
            <StructuredData data={coursesPageSchema} />
      <Header route={"/courses"} />
      <main style={{ paddingTop: `${headerOffset}px` }}> 
      <div className="banner px-4 sm:px-8 md:px-14 md:py-2 lg:px-24 lg:py-4 xl:px-28 xl:py-4 2xl:px-32 2xl:py-6">
        <h2>{t('courses.title')}</h2>
      </div>
        <section className="lg:mx-36 md:mx-16 sm:mx-14 mx-14 my-12 sm:my-4 md:my-8 lg:my-12 xl:my-16 2xl:my-20 xl:mx-44 2xl:mx-60">
          <div className="courses_description text-slate-700 pb-8">
            <p>{t('courses.desc')}</p>
          </div>
          <div className=" grid gap-4 md:grid-cols-2 sm:grid-cols-1">
            {courses.map(({ date, gradient, edition, title, description, route }) => {
              return (
                <div key={title} className={`rounded-lg px-6 py-4 course transition ${gradient}`} >
                  <div className="course_content">
                    <div className="card_container_top">
                      <div className="flex gap-3">
                        <span className="course_tag">
                          <small>{date}</small>
                        </span>
                        <span className="course_tag">
                          <small> {edition}{t('courses.tag')}</small>
                        </span>
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
                  <div className="course_button">
                    <CreateLink route={route}>

                      <button className="course_route">

                        <FontAwesomeIcon className="award_icon" icon={faArrowRight} />
                        <span>{t('courses.button')}</span>

                      </button>
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
