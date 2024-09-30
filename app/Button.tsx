import React from "react";
import {
  ButtonGroup,
  Button,
  ButtonText,
  ButtonIcon,
} from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { LogIn, LogOut } from "lucide-react-native";

const ButtonDemo = () => {
  return (
    <Center className="flex-1">
      <ButtonGroup>
        <Button className="gap-2">
          <ButtonText>Log In</ButtonText>
          <ButtonIcon as={LogIn} />
        </Button>
        <Button className="gap-2" variant="outline">
          <ButtonText>Log Out</ButtonText>
          <ButtonIcon as={LogOut} />
        </Button>
      </ButtonGroup>
    </Center>
  );
};

export default ButtonDemo;
