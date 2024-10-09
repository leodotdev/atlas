import React from "react";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

const ProgressDemo = () => {
  return (
    <Center className="flex-1 p-6">
      <VStack className="bg-background-0 p-6 rounded-lg border border-outline-200 w-full max-w-[336px]">
        <Text size="xl" className="font-medium text-typography-900">
          Download in progress..
        </Text>
        <Progress value={40} size="xs" className="w-full mt-6 mb-2">
          <ProgressFilledTrack />
        </Progress>
        <Text size="sm" className="text-typography-800">
          40% complete..
        </Text>
      </VStack>
    </Center>
  );
};

export default ProgressDemo;
