import React, { useState } from "react";
import Link from "next/link";
import { myProjectCards } from "@/constants/projectsCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function projectCards(props) {
  const [projectCards, setProjectCards] = useState(myProjectCards);
  const [selectedCategory, setSelectedCategory] = useState("all");

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
        <div className={`button_filter  ${selectedCategory === "all" ? "selected" : ""}`} onClick={() => handleCategoryChange("all")}>All</div>
        <div className={`button_filter  ${selectedCategory === "ind" ? "selected" : ""} `} onClick={() => handleCategoryChange("ind")}>
          Projects - individual
        </div>
        <div className={`button_filter ${selectedCategory === "erg" ? "selected" : ""}`} onClick={() => handleCategoryChange("erg")}>
          Educational Research Group (GIE/ERG)
        </div>
        <div className={`button_filter ${selectedCategory === "other" ? "selected" : ""}`} onClick={() => handleCategoryChange("other")}>Other</div>
      </div>
      <div className="project_cards my-4 sm:my-6 lg:my-10 sm:grid sm:grid-cols-2 sm:gap-4">
        {projectCards.map(
          ({ date, route, title, subtitle, tags, category }, index) => (
            <div key={index} className="project_card mb-4 sm:mb-0 p-4 md:p-6">
              <div className="year_and_cta">
                <div className="date">{date}</div>
                <a href={route}>
                  {" "}
                  <p>details</p>
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
              <div className="project_info">
                <h4 className="project_title">{title}</h4>
                <div className="project_subtitle">{subtitle}</div>
              </div>
              <div className="project_tags ">
                {tags.split(',').map((tag, tagIndex) => (
                  <span key={tagIndex} className="project_tag text-xs md:text-[0.85rem]">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
