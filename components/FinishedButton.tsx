"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Smile } from "lucide-react";
import { createCompleted } from "@/sanity/lib/actions/completed";
import { getCourseCompleters } from "@/sanity/lib/actions/getFunctions";
import { useRouter } from "next/navigation";

type Props = {
  userId: string;
  courseId: string;
};

const FinishedButton = async ({ userId, courseId }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const courseCompleted = getCourseCompleters(courseId);

  const handleFinished = async () => {
    try {
      setLoading(true);
      await createCompleted({
        userId,
        courseId,
        createdAt: new Date().toISOString(),
      });
      setLoading(false);
      router.refresh();
    } catch (error) {
      throw new Error(
        `Failed to add this course to finished courses: ${error}`
      );
    }
  };
  return (
    <div>
      {typeof courseCompleted != "undefined" ? (
        <Button disabled onClick={handleFinished}>
          Finished <Smile />
        </Button>
      ) : (
        <Button disabled={loading} onClick={handleFinished}>
          {loading ? `Finishing...` : `Finished ${(<Smile />)}`}
        </Button>
      )}
    </div>
  );
};

export default FinishedButton;
