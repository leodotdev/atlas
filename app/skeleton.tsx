import React from "react";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

const CardDemo = () => {
  return (
    <Center className="flex-1 bg-typography-0 p-6">
      <VStack space="lg" className="w-full max-w-[352px]">
        <HStack space="xl">
          <VStack space="sm" className="w-full">
            <Skeleton className="w-full h-[84px]" variant="rounded" />
            <SkeletonText className="h-6 w-full" _lines={1} />
            <SkeletonText className="h-6 w-full" _lines={1} />
          </VStack>
          <VStack space="sm" className="w-full">
            <SkeletonText className="h-6 w-full" _lines={1} />
            <SkeletonText className="h-6 w-full" _lines={1} />
            <SkeletonText className="h-6 w-full" _lines={1} />
            <Skeleton className="w-full h-[52px]" variant="rounded" />
          </VStack>
        </HStack>
        <SkeletonText className="h-6 w-full" _lines={1} />
        <SkeletonText className="h-6 w-full" _lines={1} />
        <SkeletonText className="h-6 w-full" _lines={1} />
      </VStack>
    </Center>
  );
};

export default CardDemo;
