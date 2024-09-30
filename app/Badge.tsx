import React from "react";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";
import { GlobeIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";
const BadgeDemo = () => {
  return (
    <Center className="flex-1 bg-typography-0">
      <Badge>
        <BadgeText>Verified</BadgeText>
        <BadgeIcon as={GlobeIcon} className="ml-2" />
      </Badge>
    </Center>
  );
};

export default BadgeDemo;
