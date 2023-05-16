import React, { useState } from "react";
import "./categoryReel.css";
import  { categories } from "../../backend/db/categories";

const CategoryReel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  

  const scrollLeft = () => {
    setScrollPosition(scrollPosition + 30);
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition - 30);
  };

  const showLeftArrow = scrollPosition < 0;
  const showRightArrow = scrollPosition  <= 100 && scrollPosition  > -90 ;

  return (

    <div className="main">
       <div className="categoryReel">
      {showLeftArrow && (
        <button className="scrollButton left" onClick={scrollLeft}>
          &lt;
        </button>
      )}
      <div className="reelContainer">
        <div className="reel" style={{ transform: `translateX(${scrollPosition}%)` }}>
          {categories.map(({id, categoryName, image}) => (
            <div className="category" key={id}>
              <img src={image} alt=" " />
              <p>{categoryName}</p>
            </div>
          ))}
        </div>
      </div>
      {showRightArrow && (
        <button className="scrollButton right" onClick={scrollRight}>
          &gt;
        </button>
      )}
    </div>
    </div>
   
  );
};

export default CategoryReel;
