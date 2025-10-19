import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Side from "@/components/Side";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {/* <div className="flex">
        <div className="w-[300px] hidden md:block">
          <Side />
        </div>
        <div className="md:w-[calc(100%-300px)] h-[calc(100vh-60px)] overflow-y-scroll scrollbar px-[20px] md:pr-[40px]">
        </div>
      </div> */}
      <div className="px-[20px] md:px-[40px] max-w-[1440px] mx-auto">
        {children}
        <Footer />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
