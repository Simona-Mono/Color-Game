import { useState } from 'react';

interface DropDownBtnProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

export default function DropDownBtn(props: DropDownBtnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('HEX');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    props.onSelect(option);
    toggleDropdown();
  };

  return (
    <div className='relative'>
      <button
        onClick={toggleDropdown}
        className="hover:bg-customblue-50 hover:text-white font-semibold h-full px-4 py-1 inline-flex items-center"
      >
       {/* Selected option */}
        {selectedOption}
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12l-6-6 1.5-1.5L10 9.5l4.5-4.5L16 6l-6 6z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-8 right-0 w-full bg-white shadow-md">
          {props.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="block text-left w-full py-2 px-4 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
