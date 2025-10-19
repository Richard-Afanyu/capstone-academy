import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const QuickStart = () => {
  return (
    <div className="cardBase mt-[40px] flex items-center justify-center flex-col gap-4 py-4 px-4">
      <h2 className="bigTitle">Quick Start</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim
        fuga culpa labore molestias neque harum perspiciatis cupiditate
        laboriosam nesciunt assumenda, tenetur aspernatur itaque ducimus? Et
        dicta cum quae expedita.
      </p>
      <Button>
        <Link href="/sign-up">Get Started</Link>
      </Button>
    </div>
  );
};

export default QuickStart;
