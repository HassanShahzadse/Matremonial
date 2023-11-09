import React, { useState } from 'react';

interface RadioButtonsProps {
    selectedOption: string;
    onOptionChange: (value: string) => void;
  }
  
function RadioButtons({ selectedOption, onOptionChange }:RadioButtonsProps ) {
    // const [selectedOption, setSelectedOption] = useState('');

    // const handleOptionChange = (event: any) => {
    //     setSelectedOption(event.target.value);
    // };

    return (
        <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={() => onOptionChange('option1')}
                />
                <span>Male</span>
            </label>

            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={() => onOptionChange('option2')}
                />
                <span>Female</span>
            </label>

            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="option3"
                    checked={selectedOption === 'option3'}
                    onChange={() => onOptionChange('option3')}
                />
                <span>Non-Binary</span>
            </label>
        </div>



    );
}

export default RadioButtons;
