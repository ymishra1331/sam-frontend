import React, { useState } from 'react';

const BrandFilter = ({ onFilterChange }) => {
  const [selectedLetter, setSelectedLetter] = useState('');

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    onFilterChange(letter);
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="relative">
      <select
        onChange={(e) => handleLetterClick(e.target.value)}
        className="h-10 w-[150px] cursor-pointer rounded shadow px-1 outline-none bg-white"
      >
        <option value="" disabled defaultSelected>Filter by Letter</option>
        {alphabet.map((letter) => (
          <option key={letter} value={letter}>
            {letter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandFilter;
