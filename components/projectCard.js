"use client";

import React, { useState } from "react";
import Link from "next/link";
import { myProjectCards } from "@/constants/projectsCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';

export default function projectCards(props) {
  const [projectCards, setProjectCards] = useState(myProjectCards);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { t } = useTranslation();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setProjectCards(myProjectCards);
    } else {
      const filteredCards = myProjectCards.filter(
        (card) => card.category === category
      );
      setProjectCards(filteredCards);
    }
  };


  return (
    <div>
      <div className="filter_options flex">
        <button className={`button_filter  ${selectedCategory === "all" ? "selected" : ""}`} onClick={() => handleCategoryChange("all")}>{t('projects.filterTitle1')}</button>
        <button className={`button_filter  ${selectedCategory === "european" ? "selected" : ""} `} onClick={() => handleCategoryChange("european")}>
          {t('projects.filterTitle3')}
        </button>
        <button className={`button_filter ${selectedCategory === "PIE" ? "selected" : ""}`} onClick={() => handleCategoryChange("PIE")}>
          {t('projects.filterTitle2')}
        </button>
        <button className={`button_filter ${selectedCategory === "other" ? "selected" : ""}`} onClick={() => handleCategoryChange("Other")}>
          {t('projects.filterTitle4')}
        </button>
      </div>
      <div className="project_cards my-4 sm:my-6 lg:my-10 sm:grid sm:grid-cols-2 sm:gap-4">
        {projectCards.map(
          ({ date, route, title, subtitle, tags, category }, index) => (
            <div key={index} className="project_card mb-4 sm:mb-0 p-4 md:p-6">
              <div className="year_and_cta">
                <span><p className="date">{date}</p> </span>
                {/* <a href={route} target="_blank">
                  {" "}
                  <p> {t('projects.button')}</p>
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a> */}
              </div>
              <div className="project_info">
              <a className="project_title" href={route} target="_blank">
                <h4 className="mb-0" >{title} 
                 
               </h4> 
               <FontAwesomeIcon icon={faUpRightFromSquare} /> </a>
                <p className="project_subtitle text-gray-600">{subtitle}</p>
              </div>
              <div className="project_tags ">
                {tags.split(',').map((tag, tagIndex) => (
                  <small key={tagIndex} className="project_tag">  {/*text-xs md:text-[0.85rem]*/}
                   {tag.trim()}
                  </small>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
