import React from "react";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";

const CenterDemo = () => {
  return (
    <Center className="flex-1">
      <Center className="bg-primary-500 h-[100px] w-[200px]">
        <Text className="text-typography-0">This is a center.</Text>
      </Center>
    </Center>
  );
};

export default CenterDemo;
