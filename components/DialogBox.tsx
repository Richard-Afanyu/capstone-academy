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

const DialogBox = () => {
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
          <Button variant={"destructive"}>Delete my account</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
