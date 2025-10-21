import React from "react";
import { CarouselSpacing } from "./CarouselSpacing";

const Testimonials = () => {
  return (
    <div className="mt-[40px]">
      <h2 className="bigTitle">Read what our students have to say</h2>
      <p>
        Our results speak for us. Take a look at what our students have to say
        about the program and their experience with us.
      </p>
      <div className="mt-[20px]">
        <CarouselSpacing />
      </div>
    </div>
  );
};

export default Testimonials;
