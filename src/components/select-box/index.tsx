/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import style from './select-box.module.scss';

interface Option {
  label: string;
  value: string;
}

interface SelectBoxProps {
  options: Option[];
  className: any;
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  label,
  className,
  placeholder,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    setIsOpen(false);
    setSelectedOption(option);
    onChange(option.value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div
      className={`${className && className} ${style.selectBox}`}
      onClick={handleClick}
    >
      {label && <label>{label}</label>}
      <input
        type="text"
        value={selectedOption?.label || searchTerm}
        onChange={handleSearch}
        placeholder={placeholder}
        className={style.selectBoxInput}
      />
      <svg
        width="11"
        height="7"
        viewBox="0 0 11 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style.arrow}
        style={{ rotate: isOpen ? '180deg' : '' }}
      >
        <path
          d="M10.0833 5.76161e-05L5.5 4.54923L0.916668 5.68041e-05L4.71012e-07 0.909891L5.5 6.3689L11 0.909892L10.0833 5.76161e-05Z"
          fill="#444A6D"
        />
      </svg>

      <ul className={`${style.selectBoxOptions} ${isOpen ? style.show : ''}`}>
        {filteredOptions.map((option) => (
          <li key={option.value} onClick={() => handleSelect(option)}>
            {option.label}
          </li>
        ))}
      </ul>
      {isOpen && <div className={style.backdropDiv} />}
    </div>
  );
};

export default SelectBox;
