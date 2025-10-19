import DashboardNavbar from "@/components/DashboardNavbar";
import { Button } from "@/components/ui/button";
import React from "react";

interface StudentType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}

const StudentsPage = () => {
  const students: StudentType[] = [
    {
      id: "student1",
      firstName: "Richard",
      lastName: "Afanyu",
      email: "richardafanyu5@gmail.com",
      createdAt: "15/10/2025",
    },
    {
      id: "student2",
      firstName: "Richard",
      lastName: "Afanyu",
      email: "richardafanyu5@gmail.com",
      createdAt: "15/10/2025",
    },
    {
      id: "student3",
      firstName: "Richard",
      lastName: "Afanyu",
      email: "richardafanyu5@gmail.com",
      createdAt: "15/10/2025",
    },
    {
      id: "student4",
      firstName: "Richard",
      lastName: "Afanyu",
      email: "richardafanyu5@gmail.com",
      createdAt: "15/10/2025",
    },
  ];
  return (
    <div className="mt-[20px] min-h-[calc(100vh-60px)]">
      {/* readjust spacings */}
      {/* <h2 className="bigTitle">All Registered Students</h2> */}
      <DashboardNavbar title="All Registered Students" />
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non quam
        autem id. Expedita, repellat laborum inventore ut similique.
      </p>

      {/* display all students */}
      <div className="mt-[40px]">
        {/* headings */}
        <div className="grid gap-[20px] grid-cols-4 text-[14px] text-muted-foreground ">
          <div>Student name</div>
          <div>Student email</div>
          <div>Sign-up date</div>
          <div>Remove</div>
        </div>
        <div>
          {students.map((item) => (
            <div
              key={item.id}
              className="grid gap-[20px] grid-cols-4 text-[14px] mt-[20px]"
            >
              <div className="border-r border-border overflow-x-hidden">
                <p>
                  {item.firstName} {item.lastName}
                </p>
              </div>
              <div className="border-r border-border overflow-x-hidden">
                <p>{item.email}</p>
              </div>
              <div className="border-r border-border">
                <p>{item.createdAt}</p>
              </div>
              <Button variant={"destructive"} className="cursor-pointer">
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
