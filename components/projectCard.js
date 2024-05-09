import React, { useState } from "react";
import Link from "next/link";
import { myProjectCards } from "@/constants/projectsCards";

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
        <button onClick={() => handleCategoryChange("all")}>All</button>
        <button onClick={() => handleCategoryChange("ind")}>Projects - individual</button>
        <button onClick={() => handleCategoryChange("erg")}>Educational Research Group (GIE/ERG)</button>
        <button onClick={() => handleCategoryChange("other")}>Other</button>
      </div>
    <div className="project_cards md:grid md:grid-cols-2 md:gap-4">
      
      {projectCards.map(
        ({ date, route, title, subtitle, tags, category }, index) => (
          <div key={index} className="project_card mb-4 p-4 md:p-6">
            <div className="year_and_cta">
              <div className="date">{date}</div>
              <a href={route}>details</a>
            </div>
            <div className="project_info">
              <h4 className="project_title">{title}</h4>
              <div className="project_subtitle">{subtitle}</div>
            </div>
            <div className="project_tags">{tags}</div>
          </div>
        )
      )}
    </div>
    </div>
  );
}
