import React from "react";
import { Divider } from "@/components/ui/divider";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";

const DividerDemo = () => {
  return (
    <Center className="flex-1">
      <Center className="w-[200px]">
        <Text className="font-semibold">Easy</Text>
        <Divider className="my-0.5" />
        <Text className="font-semibold">Difficult</Text>
      </Center>
    </Center>
  );
};

export default DividerDemo;
