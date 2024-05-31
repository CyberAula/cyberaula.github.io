import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { mypublications } from "../constants/publications";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function RecentPublications(props) {
  const [papers, setPapers] = useState(mypublications);
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="_publications _recent_publications ">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
        <Masonry gutter="24px">
          {papers
            .filter((paper) => {
              return paper.type === "article-journal";
            })
            .filter((i, index) => index < 3)
            .map(({ doi, title, author, date, stroke, content }, index) => {
              return (
                <a
                  key={doi}
                  href={doi}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={`article ${index === 1 ? "large-article" : ""}`}>
                    <div className={`article_stroke ${stroke}`}></div>
                    <div className="article_content">
                      <div className="article_top">
                        <span>{date}</span>
                      </div>
                      <h5 className="article_title">{title}</h5>
                      <div className="article_author">{author}</div>
                      {doi ? (
                        <button className="paper_link text-nowrap">
                          <Link rel="noopener noreferrer" target="_blank" href={doi}>
                            <span>{t('publications.button')}</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </Link>
                        </button>
                      ) : null}
                    </div>
                  </div>
                </a>
              );
            })}


          <a href="/research" rel="noopener noreferrer">
            <div className="more">
              {t('front.latestPublicationsButton')}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-right"
                className="svg-inline--fa fa-arrow-right "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                ></path>
              </svg>{" "}
            </div>
          </a>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
