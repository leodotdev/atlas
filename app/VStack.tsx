import React from "react";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";

const VStackDemo = () => {
  return (
    <Center className="flex-1">
      <VStack space="sm">
        <Box className="h-10 w-10 bg-primary-300" />
        <Box className="h-10 w-10 bg-primary-400" />
        <Box className="h-10 w-10 bg-primary-500" />
      </VStack>
    </Center>
  );
};

export default VStackDemo;
