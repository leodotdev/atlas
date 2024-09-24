import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";

const ButtonDemo = () => {
  return (
    <Center className="flex-1">
      <Button>
        <ButtonText>Hello World</ButtonText>
      </Button>
    </Center>
  );
};

export default ButtonDemo;
