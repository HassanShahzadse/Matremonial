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

              {/* Email Input */}
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

              {/* Email Input */}
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
