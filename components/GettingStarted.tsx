import React from "react";

const GettingStarted = () => {
  const info = [
    {
      id: "1",
      title: "Create a free account",
      desc: "Create a free account on Capstone Academy with just your google account or email and password - simple and fast",
    },
    {
      id: "2",
      title: "Enroll in a course",
      desc: "Choose from our library of selected courses for your desired category and get started today.",
    },
    {
      id: "3",
      title: "Gain new skills",
      desc: "Watch, Learn and ask questions to gain the skills you need to build your first software product and that dream project in due time.",
    },
  ];
  return (
    <div className="mt-[40px]">
      <h2 className="bigTitle">Our simple process</h2>
      <p>
        Our learning process is simple and straight forward - Create and
        account, Enroll in a course of your choosing and gain the necessary
        skills you desire.
      </p>
      <div className="grid grid-cols-1 mt-[20px] sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
        {info.map((item) => (
          <div
            key={item.id}
            className="border border-border rounded-[5px] py-4 px-4"
          >
            <h2 className="smallTitle">{item.title}</h2>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingStarted;
