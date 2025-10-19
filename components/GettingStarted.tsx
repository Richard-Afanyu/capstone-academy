import React from "react";

const GettingStarted = () => {
  const info = [
    {
      id: "1",
      title: "Create a free account",
      desc: "dolor sit amet, consectetur adipisicing elit. Nisi ab sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ab sit omnis autem aut quaerat ut repellat fugit blanditiis at",
    },
    {
      id: "2",
      title: "Enroll in a course",
      desc: "dolor sit amet, consectetur adipisicing elit. Nisi ab sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ab sit omnis autem aut quaerat ut repellat fugit blanditiis at",
    },
    {
      id: "3",
      title: "Gain new skills",
      desc: "dolor sit amet, consectetur adipisicing elit. Nisi ab sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ab sit omnis autem aut quaerat ut repellat fugit blanditiis at",
    },
  ];
  return (
    <div className="mt-[40px]">
      <h2 className="bigTitle">Our simple process</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        facere sit eligendi qui nulla eaque atque, in minus totam autem.
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
