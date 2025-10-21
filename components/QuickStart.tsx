import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const QuickStart = () => {
  return (
    <div className="cardBase mt-[40px] flex items-center justify-center flex-col gap-4 py-4 px-4">
      <h2 className="bigTitle">Quick Start</h2>
      <p>
        Hurry now and get started with us free of charge. Create a free account
        and gain access to tens of carefully selected courses. Keep up with
        technological updates while you learn by reading our blog posts as well.
      </p>
      <Button>
        <Link href="/sign-up">Get Started</Link>
      </Button>
    </div>
  );
};

export default QuickStart;
