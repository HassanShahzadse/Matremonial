import React, { useState } from 'react';

interface RadioButtonsProps {
    options: string[];
    selectedOption: string;
    onOptionChange: (value: string) => void;
}

function RadioButtons({ options, selectedOption, onOptionChange }: RadioButtonsProps) {
    // const [selectedOptions, setSelectedOptions] = useState('');

    // const handleOptionChange = (event: any) => {
    //     setSelectedOptions(event.target.value);
    // };

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
        // <div className="flex space-x-4">
        //     <label className="flex items-center space-x-2">
        //         <input
        //             type="radio"
        //             value="Male"
        //             checked={selectedOption === 'Male'}
        //             onChange={() => onOptionChange('Male')}
        //         />
        //         <span>Male</span>
        //     </label>

        //     <label className="flex items-center space-x-2">
        //         <input
        //             type="radio"
        //             value="Female"
        //             checked={selectedOption === 'Female'}
        //             onChange={() => onOptionChange('Female')}
        //         />
        //         <span>Female</span>
        //     </label>

        //     <label className="flex items-center space-x-2">
        //         <input
        //             type="radio"
        //             value="Non-Binary"
        //             checked={selectedOption === 'Non-Binary'}
        //             onChange={() => onOptionChange('Non-Binary')}
        //         />
        //         <span>Non-Binary</span>
        //     </label>
        // </div>



    );
}

export default RadioButtons;
