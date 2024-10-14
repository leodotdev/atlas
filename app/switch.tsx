import React from "react";
import colors from "tailwindcss/colors";
import { Switch } from "@/components/ui/switch";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";

const SwitchDemo = () => {
  return (
    <Center className="flex-1 bg-background-0">
      <HStack
        className="bg-background-0 px-10 py-5 rounded-full border border-outline-100 shadow-hard-5 items-center justify-center"
        space="xl"
      >
        <Text size="lg">
          Enable Notification
        </Text>
        <Switch
          size="lg"
          trackColor={{ false: colors.neutral[300], true: colors.neutral[600] }}
          thumbColor={colors.neutral[50]}
          // @ts-ignore
          activeThumbColor={colors.neutral[50]}
          ios_backgroundColor={colors.neutral[300]}
        />
      </HStack>
    </Center>
  );
};

export default SwitchDemo;
