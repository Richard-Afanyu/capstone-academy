import { getUserInfo } from "@/sanity/lib/actions/getFunctions";
import { currentUser } from "@clerk/nextjs/server";
// import { auth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = async () => {
  const { userId } = await auth(); // Gets the current session
  const userInfo = await getUserInfo(userId || "");

  if (!userInfo) {
    return (
      <div>
        <h2>This user does not exist!</h2>
        <Link href="/sign-up">Sign up</Link>
      </div>
    );
  }
  return (
    <div className="mt-[20px]">
      <h2 className="bigTitle">Profile</h2>
      <p className=" text-muted-foreground">Your account details</p>
      {/* content section */}
      <div className="grid grid-cols-1 md:grid-cols-5 mt-[20px] gap-[20px]">
        {/* left section */}
        <div className="md:col-span-2 h-fit border border-border rounded-[5px] py-4 px-4 flex flex-col justify-center items-center">
          <h2 className="smallTitle">{`${userInfo?.firstName} ${userInfo?.lastName}`}</h2>
          <div className="relative w-[280px] h-[280px] mt-[10px]">
            <Image
              src={userInfo?.imageUrl}
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
                {userInfo?.email}
              </div>
              <span className="text-muted-foreground text-[12px]">{`This is your Google account's email`}</span>
            </div>

            {/* date joined */}
            <div className="">
              <p className="font-semibold">Date Joined</p>
              <div className="bg-card border border-border py-2 px-2 rounded-[5px]">
                {userInfo?.createdAt?.slice(0, 10) || "sign-up date"}
              </div>
              <span className="text-muted-foreground text-[12px]">{`The date you joined dataInsights`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
