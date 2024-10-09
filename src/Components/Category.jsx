import { React, useState } from 'react';
// import { useCardContext } from '../Context/Context';
import { FaFilter } from "react-icons/fa";
export const Category = () => {
  // const {
  //   state: { product },
  //   Category,
  //   setCategory,
  // } = useCardContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <FaFilter/>
      </button>

      {isDropdownOpen && (
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className='absolute z-10 top-16  -right-8 w-80 bg-white rounded-md shadow-lg p-4 overflow-y-auto h-[400px]'
        ></div>
      )}
    </div>
  );
};
