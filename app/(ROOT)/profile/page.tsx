import DialogBox from "@/components/DialogBox";
import Image from "next/image";
import React from "react";

const ProfilePage = async () => {
  const user = {
    firstName: "Richard",
    lastName: "Afanyu",
    imageUrl: "/logo.png",
    email: "richardafanyu5@gmail.com",
    createdAt: "14/10/2025",
    completed: 10,
    enrolled: 12,
  };

  return (
    <div className="mt-[20px]">
      <h2 className="bigTitle">Profile</h2>
      <p className=" text-muted-foreground">Your account details</p>
      {/* content section */}
      <div className="grid grid-cols-1 md:grid-cols-5 mt-[20px] gap-[20px]">
        {/* left section */}
        <div className="md:col-span-2 h-fit border border-border rounded-[5px] py-4 px-4 flex flex-col justify-center items-center">
          <h2 className="sectionTitle">{`${user?.firstName} ${user?.lastName}`}</h2>
          <div className="relative w-[280px] h-[280px] mt-[10px]">
            <Image
              src={user?.imageUrl}
              alt="profile image"
              fill
              className="rounded-full object-fit"
            />
          </div>
        </div>

        {/* right section */}
        <div className="md:col-span-3 border border-border rounded-[5px] py-4 px-4 flex flex-col justify-center">
          <div className="flex justify-between items-center w-full mb-[20px]">
            <h2 className="sectionTitle">Bio & other details</h2>
            <div className="rounded-full bg-green-400 w-[10px] h-[10px]"></div>
          </div>
          {/* bio details */}
          <div className="flex flex-col gap-[20px]">
            {/* email */}
            <div>
              <p className="font-semibold">Email</p>
              <div className="bg-card border border-border py-2 px-2 rounded-[5px]">
                {user?.email}
              </div>
              <span className="text-muted-foreground text-[12px]">{`This is your Google account's email`}</span>
            </div>

            {/* enrolled */}
            <div>
              <p className="font-semibold">Courses Enrolled</p>
              <div className="bg-card border border-border py-2 px-2 rounded-[5px]">
                {user?.enrolled}
              </div>
              <span className="text-muted-foreground text-[12px]">{`This is your Google account's email`}</span>
            </div>

            {/* completed */}
            <div>
              <p className="font-semibold">Courses Completed</p>
              <div className="bg-card border border-border py-2 px-2 rounded-[5px]">
                {user?.completed}
              </div>
              <span className="text-muted-foreground text-[12px]">{`This is your Google account's email`}</span>
            </div>

            {/* date joined */}
            <div className="">
              <p className="font-semibold">Date Joined</p>
              <div className="bg-card border border-border py-2 px-2 rounded-[5px]">
                {user?.createdAt?.slice(0, 10) || "sign-up date"}
              </div>
              <span className="text-muted-foreground text-[12px]">{`The date you joined dataInsights`}</span>
            </div>

            {/* delete account */}
            <div className="mt-[20px]">
              <p className="font-semibold">Delete Account</p>
              <span className="text-[12px] text-red-500">
                Warning. This action my lead to serious consiquences if not
                considered
              </span>
              <div className="flex flex-col gap-2 mt-[10px]">
                <DialogBox />
                <span className="text-muted-foreground text-[12px]">{`Delete your dataInsights account and all your assets`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
