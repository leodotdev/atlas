import React from "react";
import { Link, LinkText } from "@/components/ui/link";
import { Center } from "@/components/ui/center";

const LinkDemo = () => {
  return (
    <Center className="flex-1">
      <Link href="https://gluestack.io/" isExternal>
        <LinkText>gluestack</LinkText>
      </Link>
    </Center>
  );
};

export default LinkDemo;
