import React from "react";

const Filters = ({ categories, active, setActive }) => {
  return (
    <div className="filters">
      {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Filters;
