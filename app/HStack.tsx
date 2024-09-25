import React from "react";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";

const HStackDemo = () => {
  return (
    <Center className="flex-1">
      <HStack space="sm">
        <Box className="h-10 w-10 bg-primary-300" />
        <Box className="h-10 w-10 bg-primary-400" />
        <Box className="h-10 w-10 bg-primary-500" />
      </HStack>
    </Center>
  );
};

export default HStackDemo;
