import React from "react";
import { Input, InputField } from "@/components/ui/input";
import { Center } from "@/components/ui/center";

const InputDemo = () => {
  return (
    <Center className="flex-1 p-6">
      <Input>
        <InputField placeholder="Enter Text here..." />
      </Input>
    </Center>
  );
};

export default InputDemo;
