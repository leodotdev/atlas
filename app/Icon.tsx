import React from "react";
import { Icon, EditIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";

const IconDemo = () => {
  return (
    <Center className="flex-1">
      <Icon as={EditIcon} size="xl" />
    </Center>
  );
};
export default IconDemo;
