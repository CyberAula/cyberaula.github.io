"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Filters from "@/components/ResearchFilter";
import Link from "next/link";
import { mypublications } from "@/constants/publications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Research() {
  const [state, setState] = useState({
    papers: mypublications,
    search: "",
    year: undefined,
    type: undefined,
    papersToShow: 6, // Number of papers to show initially
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { papers, search, year, type, papersToShow } = state;

  let papersFiltered = null;

  papersFiltered = papers.filter((paper) => {
    return (
      (!search ||
        search
          .toLowerCase()
          .replace(new RegExp(/\s/g), "")
          .replace(new RegExp(/[àáâãäå]/g), "a")
          .replace(new RegExp(/æ/g), "ae")
          .replace(new RegExp(/ç/g), "c")
          .replace(new RegExp(/[èéêë]/g), "e")
          .replace(new RegExp(/[ìíîï]/g), "i")
          .replace(new RegExp(/ñ/g), "n")
          .replace(new RegExp(/[òóôõö]/g), "o")
          .replace(new RegExp(/œ/g), "oe")
          .replace(new RegExp(/[ùúûü]/g), "u")
          .replace(new RegExp(/[ýÿ]/g), "y")
          .replace(new RegExp(/\W/g), "")
          .split(" ")
          .every((item) =>
            paper.content
              .toLowerCase()
              .replace(new RegExp(/\s/g), "")
              .replace(new RegExp(/[àáâãäå]/g), "a")
              .replace(new RegExp(/æ/g), "ae")
              .replace(new RegExp(/ç/g), "c")
              .replace(new RegExp(/[èéêë]/g), "e")
              .replace(new RegExp(/[ìíîï]/g), "i")
              .replace(new RegExp(/ñ/g), "n")
              .replace(new RegExp(/[òóôõö]/g), "o")
              .replace(new RegExp(/œ/g), "oe")
              .replace(new RegExp(/[ùúûü]/g), "u")
              .replace(new RegExp(/[ýÿ]/g), "y")
              .replace(new RegExp(/\W/g), "")
              .includes(item)
          )) &&
      (!year ||
        (paper.date && paper.date[0] && paper.date[0].toString() === year)) &&
      (!type || (paper.type && paper.type === type))
    );
  });

  const handleLoadMore = () => {
    setState((prevState) => ({
      ...prevState,
      papersToShow: prevState.papersToShow + 3,
    }));
  };

  return (
    <div className="research_container">
      <div className="research">
        <Header route={"/research"} />
        <div className="banner">
          <h1>Publications</h1>
        </div>
        <main>
          <section className="research">
            <Filters
              search={search}
              year={year}
              type={type}
              papers={papers}
              changeSearch={(search) => setState({ ...state, search: search })}
              changeYear={(year) => setState({ ...state, year: year })}
              changeType={(type) => setState({ ...state, type: type })}

              //número de resultados de búsqueda
              results={
                papersFiltered instanceof Array ? papersFiltered.length : 0
              }
            />
            <div className="papers">
              {papersFiltered
                .slice(0, papersToShow)
                .map(({ date, doi, author, title, journal }, ind) => {
                  return (
                    <div key={ind} className="paper">
                      <div className="paper_main">
                        <div className="paper_date">
                          <h5 className="year">{date ? date[0] : ""}</h5>
                        </div>
                        <div className="paper_content">
                          <div className="paper_title">
                            <h4>{title}</h4>
                          </div>
                          <div
                            
                            className="paper_subtitle"
                          >{author}. {journal}</div>
                        </div>
                      </div>
                      <div className="links">
                        <a rel="noopener noreferrer" target="_blank" href={doi}>
                          {" "}
                          <p>Read publication </p>
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                          />{" "}
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="load_more">
              {papersFiltered.length > papersToShow && (
                <button onClick={handleLoadMore}>Load More</button>
              )}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
