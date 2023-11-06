import React, { useState } from 'react';

function DateOfBirthInput() {
  const [dateOfBirth, setDateOfBirth] = useState({
    day: '',
    month: '',
    year: '',
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setDateOfBirth({
      ...dateOfBirth,
      [name]: value,
    });
  };

  return (
    <div className="max-w-md mx-auto  p-4">
      <div className="flex space-x-8">
        <div className="w-1/4">
          {/* <label className="block mb-2">Day:</label> */}
          <input
            type="text"
            name="day"
            value={dateOfBirth.day}
            onChange={handleInputChange}
            placeholder='Day'
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="w-1/4">
          {/* <label className="block mb-2">Month:</label> */}
          <input
            type="text"
            name="month"
            value={dateOfBirth.month}
            placeholder='Month'
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="w-1/4">
          {/* <label className="block mb-2">Year:</label> */}
          <input
            type="text"
            name="year"
            value={dateOfBirth.year}
            onChange={handleInputChange}
            placeholder='Year'
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default DateOfBirthInput;
