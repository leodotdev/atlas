import React from "react";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";

const CenterDemo = () => {
  return (
    <Center className="flex-1 px-6">
      <Center className="max-h-[406px] max-w-[406px] w-full h-full p-6 bg-background-0 rounded-xl border-dashed border-outline-200 border-[3px]">
        <Center className="w-[176px] h-[176px] p-4 gap-4 flex flex-col rounded-lg bg-background-50">
          <Avatar size="xl">
            <AvatarFallbackText>Jane Doe</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
            <AvatarBadge />
          </Avatar>
          <Text className="text-typography-900">I'm at the centre.</Text>
        </Center>
      </Center>
    </Center>
  );
};

export default CenterDemo;
