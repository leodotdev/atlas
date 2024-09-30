import React from "react";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";

const VStackDemo = () => {
  return (
    <Center className="flex-1 bg-background-0 p-6">
      <VStack space="md" className="w-full max-w-[400px] h-full max-h-[300px]">
        <Box className="grow-[1] border border-dashed border-outline-400 rounded-lg bg-background-0 w-full" />
        <Box className="grow-[2] border border-dashed border-outline-400 rounded-lg bg-background-0 w-full" />
        <Box className="grow-[2] border border-dashed border-outline-400 rounded-lg bg-background-0 w-full" />
      </VStack>
    </Center>
  );
};

export default VStackDemo;
