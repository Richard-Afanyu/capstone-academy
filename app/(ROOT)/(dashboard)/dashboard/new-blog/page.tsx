import AddBlogForm from "@/components/AddBlogForm";
import DashboardNavbar from "@/components/DashboardNavbar";
import React from "react";

const NewBlogPage = () => {
  return (
    <div className="mt-[20px] max-h-[calc(100vh-60px)] overflow-y-scroll scrollbar">
      {/* <h2 className="bigTitle">Add A Blog Post</h2> */}
      <DashboardNavbar title="Add A Blog Post" />
      <p className="text-muted-foreground">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur culpa
        mollitia placeat temporibus commodi aperiam!
      </p>

      {/* add form */}
      <div className="mt-[40px]">
        <AddBlogForm />
      </div>
    </div>
  );
};

export default NewBlogPage;
