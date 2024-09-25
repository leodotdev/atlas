import React from "react";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";

const PressableDemo = () => {
  return (
    <Center className="flex-1">
      <Pressable
        // eslint-disable-next-line no-console
        onPress={() => console.log("Hello")}
        className="p-5 bg-primary-500"
      >
        <Text className="text-typography-0">Press me</Text>
      </Pressable>
    </Center>
  );
};

export default PressableDemo;
