import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from '../../data/data.js';
import './app.css';

const customStyles = {
  option: (provided, {isDisabled, isFocused, isSelected}) => ({
    ...provided,
    backgroundColor: isFocused 
        ? '#FFBD2B' 
        : null,
    color: isFocused 
        ? '#FFFFFF' 
        : isDisabled
        ? 'gray'
        : null,    
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    ':active': {
      ...provided[':active'],
      backgroundColor:
        !isDisabled && (isSelected ? '#FFBD2B' : 'FFBD2B'),
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#FFBD2B',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: 'black',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    padding: '1px 3px 5px 3px',
  }),
}

const animatedComponents = makeAnimated();

export default function App() {
  return (
    <div className="wrapper">
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        options={colourOptions}
        styles={customStyles}
      />
    </div>
  );
}

