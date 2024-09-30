import React from "react";
import { Input, InputField } from "@/components/ui/input";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";

const InputDemo = () => {
  const [inputValue1, setInputValue1] = React.useState("");
  const [inputValue2, setInputValue2] = React.useState("");

  return (
    <Center className="flex-1 p-6">
      <VStack className="rounded-xl border border-outline-200 bg-background-0 p-6 w-full max-w-[406px]">
        <Text size="sm" className="font-medium text-typography-900 mb-3">
          First Name
        </Text>
        <Input size="sm" className="mb-6">
          <InputField
            type={"text"}
            value={inputValue1}
            placeholder="Enter First Name"
            //@ts-ignore
            onChange={(e) => setInputValue1(e.target.value)}
          />
        </Input>

        <Text size="sm" className="font-medium text-typography-900 mb-3">
          Last Name
        </Text>
        <Input size="sm" className="mb-8">
          <InputField
            type={"text"}
            value={inputValue2}
            placeholder="Enter First Name"
            //@ts-ignore
            onChange={(e) => setInputValue2(e.target.value)}
          />
        </Input>

        <Button className="w-full">
          <ButtonText>Submit</ButtonText>
        </Button>
      </VStack>
    </Center>
  );
};
export default InputDemo;
