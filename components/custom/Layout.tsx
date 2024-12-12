import React from "react";
import { useRouter } from "expo-router";
import { ChevronLeftIcon, Icon } from "../ui/icon";
import { HStack } from "../ui/hstack";
import { Text } from "../ui/text";
import { Pressable } from "../ui/pressable";
import { SafeAreaView } from "../ui/safe-area-view";

const Layout = ({ title, children }: any) => {
  const router = useRouter();
  return (
    <>
      <HStack className="min-h-16 ios:h-[10%] border-b border-background-200 items-center px-2 bg-typography-0 ios:items-end ios:pb-2">
        <Pressable onPress={() => router.back()}>
          <Icon as={ChevronLeftIcon} size="xl" className="font-medium" />
        </Pressable>
        <Text className="text-center w-[86.5%] text-typography-950" size="lg">
          {title}
        </Text>
      </HStack>
      {children}
    </>
  );
};

export default Layout;
