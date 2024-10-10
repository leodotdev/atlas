import React from "react";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";

const HStackDemo = () => {
  return (
    <Center className="flex-1 bg-background-0">
      <HStack
        space="xl"
        className="items-center w-full max-w-[548px] p-6 h-full max-h-[364px]"
      >
        <Box className="grow-[1] border border-dashed border-outline-400 rounded-lg bg-background-0 h-full" />
        <Box className="grow-[2] border border-dashed border-outline-400 rounded-lg bg-background-0 h-full" />
        <Box className="grow-[2] border border-dashed border-outline-400 rounded-lg bg-background-0 h-full" />
      </HStack>
    </Center>
  );
};

export default HStackDemo;
