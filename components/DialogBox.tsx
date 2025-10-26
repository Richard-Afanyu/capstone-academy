"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Button } from "./ui/button";
// import { deleteUser } from "@/sanity/lib/actions/userActions";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

type Props = {
  userId: string;
};

const DialogBox = ({ userId }: Props) => {
  const router = useRouter();
  const { user } = useUser();

  const handleDeleteAccount = async () => {
    try {
      // await deleteUser(user?.id || "");
      router.push("/");
    } catch (error) {
      console.error("Error deleting account:", error);
      // You might want to add a toast or alert here to show the error to the user
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-red-600 text-white font-semibold border border-border py-2 px-2 rounded-[5px]">
          Delete account
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          <Button variant={"destructive"} onClick={handleDeleteAccount}>
            Delete my account
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
