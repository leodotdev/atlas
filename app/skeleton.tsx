import React from "react";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

const SkeletonDemo = () => {
  return (
    <Center className="flex-1 bg-background-0 p-6">
      <VStack space="lg" className="w-full max-w-[352px]">
        <HStack space="xl" className="w-full">
          <VStack space="sm" className="flex-1">
            <Skeleton className="w-full h-[84px]" variant="rounded" speed={4} />
            <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
            <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
          </VStack>
          <VStack space="sm" className="flex-1">
            <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
            <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
            <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
            <Skeleton className="w-full h-[52px]" variant="rounded" speed={4} />
          </VStack>
        </HStack>
        <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
        <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
        <SkeletonText className="h-6 w-full" _lines={1} speed={4} />
      </VStack>
    </Center>
  );
};

export default SkeletonDemo;
