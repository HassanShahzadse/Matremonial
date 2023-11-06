import React, { useState } from 'react';

function RadioButtons() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                />
                <span>Male</span>
            </label>

            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                />
                <span>Female</span>
            </label>

            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="option3"
                    checked={selectedOption === 'option3'}
                    onChange={handleOptionChange}
                />
                <span>Non-Binary</span>
            </label>
        </div>



    );
}

export default RadioButtons;
