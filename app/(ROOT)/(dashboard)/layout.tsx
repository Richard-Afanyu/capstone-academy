// import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-[20px]">
      <div className="hidden md:block">
        <DashboardSidebar />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
