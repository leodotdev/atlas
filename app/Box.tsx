import React from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";

const BoxDemo = () => {
  return (
    <Center className="flex-1">
      <Box className="bg-primary-500 p-4 h-[100px] w-[200px]">
        <Text className="text-typography-0">This is a Box.</Text>
      </Box>
    </Center>
  );
};

export default BoxDemo;
