import React from 'react'

export const Appearance = () => {
  return (
    <>
          <div className="photos bg-white shadow-md rounded-md p-7 my-10">
            <h1 className="text-xl font-semibold mb-5">Appearance</h1>
            <div className="flex justify-between lg:mx-10">
              <div className="flex-col">
                <h3>Height</h3>
                <label htmlFor="">
                  <input
                    type="number"
                    className="rounded border-2  p-2 w-20 my-3 mr-2 "/>{" "}
                  cm{" "}
                </label>
                <h3>Weight</h3>
                <label htmlFor="">
                  <input
                    type="number"
                    className="rounded border-2 p-2 w-20 mt-3 mr-2"
                  />
                  kg
                </label>
              </div>
              <div className="flex">
                <div className="flex-col ">
                  <h3 className="leading-10">On your body there is</h3>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      className="mr-3 w-5 h-5 accent-[#fb1086]"
                    />
                    Piercing
                  </label>
                  <br />
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      className="mr-3 w-5 h-5 accent-[#fb1086]"
                    />
                    Tattos
                  </label>
                  <br />
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      className="mr-3 w-5 h-5 accent-[#fb1086]"
                    />
                    Freckles
                  </label>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
