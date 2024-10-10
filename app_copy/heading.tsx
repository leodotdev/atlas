import React from "react";
import { Heading } from "@/components/ui/heading";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Icon, CircleIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";

const HeadingDemo = () => {
  return (
    <Center className="flex-1">
      <VStack space="md">
        <Heading size="4xl">Main Heading</Heading>
        <Heading size="lg" className="font-medium">
          Description of the heading
        </Heading>
        <Heading size="xl">Sub Heading</Heading>
        <VStack space="sm">
          <HStack space="sm" className="items-center ml-2">
            <Icon as={CircleIcon} className="h-1.5 w-1.5 fill-typography-950" />
            <Heading size="sm" className="font-medium">
              List Item 1
            </Heading>
          </HStack>
          <HStack space="sm" className="items-center ml-2">
            <Icon as={CircleIcon} className="h-1.5 w-1.5 fill-typography-950" />
            <Heading size="sm" className="font-medium">
              List Item 2
            </Heading>
          </HStack>
          <HStack space="sm" className="items-center ml-2">
            <Icon as={CircleIcon} className="h-1.5 w-1.5 fill-typography-950" />
            <Heading size="sm" className="font-medium">
              List Item 3
            </Heading>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
};

export default HeadingDemo;
