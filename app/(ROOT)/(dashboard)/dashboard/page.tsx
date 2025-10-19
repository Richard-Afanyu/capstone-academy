import DashboardNavbar from "@/components/DashboardNavbar";
import React from "react";

const DashboarPage = () => {
  return (
    <div className="mt-[20px] min-h-[calc(100vh-60px)]">
      <DashboardNavbar title="Dashboard" />
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
        voluptatum nostrum culpa pariatur, quis iure a molestias id labore
        debitis similique sequi expedita deserunt inventore ut! Vitae minima
        eius fuga.
      </p>
    </div>
  );
};

export default DashboarPage;
