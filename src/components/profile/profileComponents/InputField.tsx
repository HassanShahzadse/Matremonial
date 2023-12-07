import React from 'react'

export const InputField = () => {
  return (
    <>
     <div className="grid lg:grid-cols-2 gap-5 bg-white shadow-md p-5 rounded-md my-10 w-full">
            <div>
              <div className="mb-4 ">
                <label
                  htmlFor="name"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Display Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

           
              <div className="mb-4">
                <label
                  htmlFor="number"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Birthday
                </label>
                <input
                  type="number"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>

            <div>
              <div className="mb-4 ">
                <label
                  htmlFor="name"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="text"
                  className="block text-gray-600 text-sm font-medium"
                >
                  City
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border focus:border-none rounded-md"
                />
              </div>
            </div>

          </div>
    </>
  )
}



// import React, { useState } from 'react';

// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     birthday: '',
//     description: '',
//     city: '',
//   });

//   const handleInputChange = (e: { target: { value: { name: 'Bilal'; value: 'joyia'; }; }; }) => {
//     const { name, value } = e.target.value;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="grid lg:grid-cols-2 gap-5 bg-white shadow-md p-5 rounded-md my-10 w-full">
//       <div>
//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-gray-600 text-sm font-medium"
//           >
//             Display Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="birthday"
//             className="block text-gray-600 text-sm font-medium"
//           >
//             Birthday
//           </label>
//           <input
//             type="number"
//             id="birthday"
//             name="birthday"
//             value={formData.birthday}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//       </div>

//       <div>
//         <div className="mb-4">
//           <label
//             htmlFor="description"
//             className="block text-gray-600 text-sm font-medium"
//           >
//             Description
//           </label>
//           <input
//             type="text"
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="city"
//             className="block text-gray-600 text-sm font-medium"
//           >
//             City
//           </label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             value={formData.city}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border focus:border-none rounded-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyForm;
