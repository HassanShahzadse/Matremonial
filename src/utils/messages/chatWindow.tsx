import React from "react";
import Image from "next/image";
import Woman from "/public/member3.png";

export const ChatWindow = () => {
  return (
    <>
      {/* <!-- Chat Window --> */}
      <div className="flex-1 flex flex-col h-full overflow-hidden ">
        {/* <!-- Chat Header --> */}
        <div className="flex items-center justify-between bg-[#FFDDEE] p-3 md:hidden sm:block">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gray-500"></div>
            <p className="text-lg font-semibold">Jasica</p>
          </div>
        </div>

        {/* <!-- Chat Messages --> */}

        <div className="flex-1 overflow-y-auto p-4 bg-white">
          {/* <!-- User 1 Message --> */}
          <div className="flex mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
            <div className="ml-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">Hello, how are you?</p>
            </div>
          </div>
          {/* <!-- User 2 Message --> */}
          <div className="flex mb-4 justify-end">
            <div className="mr-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">good, thank you!</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
          </div>
          {/* <!-- User 1 Message --> */}
          <div className="flex mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
            <div className="ml-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">Hello, how are you?</p>
            </div>
          </div>
          <div className="flex mb-4 justify-end">
            <div className="mr-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">good, thank you!</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
          </div>

          <div className="flex mb-4 justify-end">
            <div className="mr-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">good, thank you!</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
          </div>

          <div className="flex mb-4 justify-end">
            <div className="mr-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">good, thank you!</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
          </div>

            <div className="flex mb-4 justify-end">
              <div className="mr-3 bg-gray-200 p-3 rounded-lg">
                <p className="text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore voluptates quam illo explicabo aliquid placeat dolore accusantium corporis neque non. Aperiam ipsam ipsum tenetur dicta, nemo cupiditate, sunt repudiandae labore ipsa suscipit quidem iure, non blanditiis! Nostrum quis obcaecati autem libero ea sequi quasi perspiciatis maxime hic ipsa, debitis facere enim accusamus blanditiis doloribus alias labore animi odio exercitationem cum impedit. Est ut quibusdam deleniti, exercitationem, in eligendi incidunt unde quod eos possimus asperiores consequuntur ipsum natus illo, impedit dignissimos sint necessitatibus. Eveniet, eos suscipit nisi doloremque magnam dignissimos similique reprehenderit accusantium sed nesciunt minus ad iusto obcaecati ea, ullam quo rerum explicabo quos dolores iure eum dolorem autem! Officia, veniam sequi corporis temporibus exercitationem libero impedit modi est harum quisquam soluta nulla in natus, doloremque quas voluptatem illum nemo animi ipsa? Atque maiores distinctio enim consectetur vitae quo ipsam sint, quaerat eaque tenetur. Sint cumque repellat sunt, non perspiciatis incidunt iusto quo reprehenderit adipisci numquam quasi quae quis amet ducimus veniam eligendi dolor earum minus, corporis voluptatibus vero explicabo animi nihil. Perferendis repudiandae totam, natus doloremque consequuntur corrupti eum ducimus aperiam modi odit quasi deleniti. Quidem neque maxime minima ut, laborum velit animi itaque! Nostrum totam quidem eligendi obcaecati similique id vel sunt ducimus, sed autem aperiam, ut hic veritatis reprehenderit labore omnis magni illo velit explicabo qui ab. Eos, est. Impedit optio error blanditiis doloribus, tempore sint consequuntur? Tenetur accusamus voluptate aliquam quod nostrum nam at, repellat, alias dolore a culpa! Numquam fuga quaerat exercitationem facilis sit a ducimus ipsum voluptatibus laudantium non recusandae, velit sunt laborum nobis aliquid rem deleniti debitis nihil minima pariatur aspernatur. Quae maxime veritatis incidunt earum sunt repellendus impedit iusto sapiente adipisci, sint iure nihil ipsum ut, dolor, suscipit magni! Illo exercitationem tempora, eaque veritatis voluptatem nostrum recusandae officia fuga voluptate porro rem.</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-500">
                <Image src={Woman} alt="" className="rounded-full" />
              </div>
            </div>

          {/* <!-- Repeat for other messages --> */}
        </div>
        </div>
    </>
  );
};
