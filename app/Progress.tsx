import React from "react";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Center } from "@/components/ui/center";

const ProgressDemo = () => {
  return (
    <Center className="flex-1">
      <Progress value={40} className="w-[220px]">
        <ProgressFilledTrack />
      </Progress>
    </Center>
  );
};

export default ProgressDemo;
