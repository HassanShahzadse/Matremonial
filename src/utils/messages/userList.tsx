import React from "react";
import Image from "next/image";
import Woman from "/public/member3.png";

const data = [
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
  {
    id: 1,
    name: "John Snow",
    message: "Yes we can meet. What time?",
    date: "Today",
    time: "5:30",
  },
];
export const UserList = () => {
  return (
    <>
      {data.map((card) => (
        <div
          key={card.id}
          className="overflow-y-auto w-full rounded-md active:bg-green-200 bg-white my-3 shadow-md p-5 "
        >
          <div className="flex space-x-10">
            <div className="img">
              <Image
                src={Woman}
                alt="My Image"
                height={60}
                width={60}
                className="rounded"
              />
            </div>

            <div>
              <h2 className="font-semibold text-gray-400 mb-2">{card.name}</h2>
              <p className="text-sm my-1">{card.message}</p>
              <div className="flex divide-x-2 divide-black mt-4">
                <div className="mr-3">{card.date}</div>
                <div className="px-3">{card.time}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
