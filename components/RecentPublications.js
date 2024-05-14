import React from "react";
import { useState, useEffect } from "react";
import { mypublications } from "../constants/publications";

export default function RecentPublications(props) {
  const [papers, setPapers] = useState(mypublications);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="_publications _recent_publications">
      {papers
        .filter((paper) => {
          return paper.type === "article-journal";
        })
        .filter((i, index) => index < 3)
        .map(({ doi,title,author,date,stroke, content }) => {
          return (
            <a key={doi} href={doi} target="_blank" rel="noopener noreferrer">
              <div className="article">
                <div className={`article_stroke ${stroke}`} ></div>
                <div className="article_content">
                <div className="article_top"><span>{date}</span></div>
                <h5 className="article_title">{title}</h5>
                <div className="article_author">{author}</div>
                <div className="article_doi">{doi}</div>
                </div>
              </div>
            </a>
          );
        })}
    </div>
  );
}
