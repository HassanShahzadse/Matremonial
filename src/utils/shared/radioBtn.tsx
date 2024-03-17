import React, { useState } from 'react';

interface RadioButtonsProps {
    options: string[];
    selectedOption: string;
    onOptionChange: (value: string) => void;
}

function RadioButtons({ options, selectedOption, onOptionChange }: RadioButtonsProps) {
    return (
        <div className="flex space-x-4">
            {options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                    <label >
                        {option}
                   </label>
                        <input
                        className="space-x-2 mr-2"
                            type="radio"
                            name={option}
                            checked={selectedOption === option}
                            onChange={() => onOptionChange(option)}
                        />
                    
                </div>
            ))}
        </div>
        

    );
}

export default RadioButtons;
