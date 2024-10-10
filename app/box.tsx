import React from "react";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";

const BoxDemo = () => {
  return (
    <Center className="flex-1 bg-background-0 px-6">
      <Box className="flex flex-col p-6 rounded-xl border-dashed border-[3px] border-outline-200 bg-background-50 max-w-[406px] w-full">
        <Box className="bg-background-0 h-[180px] self-stretch rounded-lg mb-6" />
        <Box className="bg-background-0 h-[40px] self-stretch rounded-lg" />
        <Box className="bg-background-0 h-[24px] my-3 self-stretch rounded-lg" />
        <Box className="bg-background-0 h-[24px] self-stretch rounded-lg" />
      </Box>
    </Center>
  );
};

export default BoxDemo;
