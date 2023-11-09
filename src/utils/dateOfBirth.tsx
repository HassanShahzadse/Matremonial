import React from 'react';

interface DateOfBirthInputProps {
  dateOfBirth: string;
  onDateOfBirthChange: (dateOfBirth: string) => void;
}

function DateOfBirthInput({ dateOfBirth, onDateOfBirthChange }: DateOfBirthInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateOfBirthChange(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-2">
        <div>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
    </div>
  );
}

export default DateOfBirthInput;























// import React, { useState } from 'react';

// function DateOfBirthInput() {
//   const [dateOfBirth, setDateOfBirth] = useState({
//     day: '',
//     month: '',
//     year: '',
//   });

//   const handleInputChange = (e: any) => {
//     const { name, value } = e.target;
//     setDateOfBirth({
//       ...dateOfBirth,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <div className="flex space-x-8">
//         <div className="w-1/4">
//           <select
//             name="day"
//             value={dateOfBirth.day}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded p-2"
//           >
//             <option value="">Day</option>
//             {Array.from({ length: 31 }, (_, i) => (
//               <option key={i} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="w-1/4">
//           <select
//             name="month"
//             value={dateOfBirth.month}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded p-2"
//           >
//             <option value="">Month</option>
//             <option value="1">January</option>
//             <option value="2">February</option>
//             <option value="3">March</option>
//             <option value="4">April</option>
//             <option value="5">May</option>
//             <option value="6">June</option>
//             <option value="7">July</option>
//             <option value="8">August</option>
//             <option value="9">September</option>
//             <option value="10">October</option>
//             <option value="11">November</option>
//             <option value="12">December</option>
//           </select>
//         </div>
//         <div className="w-1/4">
//           <select
//             name="year"
//             value={dateOfBirth.year}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded p-2"
//           >
//             <option value="">Year</option>
//             {Array.from({ length: 100 }, (_, i) => (
//               <option key={i} value={2023 - i}>
//                 {2023 - i}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>

//   );
// }

// export default DateOfBirthInput;
