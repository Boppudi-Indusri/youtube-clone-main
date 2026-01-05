import React from "react";
import "../styles/categorybar.css";

const categories = [
  "All",
  "C",
  "C++",
  "Java",
  "Python",
  "MongoDB",
  "ExpressJS",
  "NodeJS",
  "HTML",
  "CSS",
];

const CategoryBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
