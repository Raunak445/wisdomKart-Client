import React, { useState } from 'react';
import './filterDropDown.css'

const FilterDropDown = ({name,options}) => {

  
  return (
    <div className="filter-container">
      <button className="filter-btn">{name}</button>
      <div className="filter-options">
        {options.map((option) => (
          <div key={option} className="filter-option">
            {option}
          </div>
        ))}
      </div>
    </div>
  );


};

export default FilterDropDown;
