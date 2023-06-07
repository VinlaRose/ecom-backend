import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import './filter.css';

export const Filters = () => {
    const { state, dispatch } = useContext(DataContext);
    const { sortOption, isChecked, rating, selectedCategories, categories } = state;
  
    const handleShowOnlyInStock = (event) => {
      dispatch({ type: "IN_STOCK", payload: event.target.checked });
    };
  
    const handleSortOptionChange = (event) => {
      dispatch({ type: "SORT", payload: event.target.value });
    };
  
    const handleRatingChange = (event) => {
      dispatch({ type: "RATING", payload: event.target.value });
    };
  
    const handleCategoryChange = (event) => {
      dispatch({ type: "CATEGORIZATION", payload: event.target.value });
    };

    const handlePriceRange = (event) => {
      console.log(state.priceRange);

      console.log(event.target.value);
      dispatch({ type: "PRIZE_RANGE", payload: event.target.value })
    };
  
    return (
      <div className='filter-wrapper'>
        <button onClick={() => dispatch({ type: "CLEAR" })}>CLEAR FILTERS</button>
        <div className="instock">
          <input
            type="checkbox"
            value={isChecked}
            checked={isChecked}
            onChange={handleShowOnlyInStock}
          />{" "}
          Show in stock items only
        </div>
        <div className="section-divider"></div>
  
        <div className='price-sort'>
          <div className="filter-headings">PRICE:</div>
          <div className="high-sort">
            <input
              type="radio"
              value="HIGH_TO_LOW"
              checked={sortOption === "HIGH_TO_LOW"}
              onChange={handleSortOptionChange}
            />{" "}
            HIGH TO LOW
          </div>
          <div className="low-sort">
            <input
              type="radio"
              value="LOW_TO_HIGH"
              checked={sortOption === "LOW_TO_HIGH"}
              onChange={handleSortOptionChange}
            />{" "}
            LOW TO HIGH
          </div>
          <div className="price-range">
          <input
            type="range"
            name="priceRange"
            className="slider"
            min="25"
            max="6600"
            value={state.priceRange}
            onChange={handlePriceRange}
          />
          </div>
        </div>
        <div className="section-divider"></div>
  
        <div className='ratings'>
          <div className="filter-headings">RATINGS:</div>
          <div>
            <input
              type="radio"
              value={4}
              checked={rating === '4'}
              onChange={handleRatingChange}
            />{" "}
            4 ABOVE
          </div>
          <div>
            <input
              type="radio"
              value={3}
              checked={rating === '3'}
              onChange={handleRatingChange}
            />{" "}
            3 ABOVE
          </div>
          <div>
            <input
              type="radio"
              value={2}
              checked={rating === '2'}
              onChange={handleRatingChange}
            />{" "}
            2 ABOVE
          </div>
          <div>
            <input
              type="radio"
              value={1}
              checked={rating === '1'}
              onChange={handleRatingChange}
            />{" "}
            1 ABOVE
          </div>
        </div>
        <div className="section-divider"></div>
  
        <div className="categories-filter">
          <div className="filter-headings">CATEGORIES:</div>
          <ul>
            {categories.map((item) => (
              <div className='eachCategory' key={item.id} >
                <input
                  type="checkbox"
                  value={item.categoryName}
                  checked={selectedCategories.includes(item.categoryName)}
                  onChange={handleCategoryChange}
                />{item.categoryName}
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  