import { useState } from 'react';

interface DropDownBtnProps {
  options: string[];
  selectedOption: string;
  onSelect: (selectedOption: string) => void;
}

export default function DropDownBtn(props: DropDownBtnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.selectedOption);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    props.onSelect(option);
    toggleDropdown();
  };

  return (
    <div className='actions__button'>
      <button
        onClick={toggleDropdown}
        className="button__dropdown--close"
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
        <div className="button__dropdown--open">
          {props.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="dropdown__item"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
