import React, { useState } from 'react';

interface RadioButtonsProps {
    selectedOption: string;
    onOptionChange: (value: string) => void;
  }
  
function RadioButtons({ selectedOption, onOptionChange }:RadioButtonsProps ) {
    // const [selectedOptions, setSelectedOptions] = useState('');

    // const handleOptionChange = (event: any) => {
    //     setSelectedOptions(event.target.value);
    // };

    return (
        <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="Male"
                    checked={selectedOption === 'Male'}
                    onChange={() => onOptionChange('Male')}
                />
                <span>Male</span>
            </label>

            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="Female"
                    checked={selectedOption === 'Female'}
                    onChange={() => onOptionChange('Female')}
                />
                <span>Female</span>
            </label>

            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="Non-Binary"
                    checked={selectedOption === 'Non-Binary'}
                    onChange={() => onOptionChange('Non-Binary')}
                />
                <span>Non-Binary</span>
            </label>
        </div>



    );
}

export default RadioButtons;
