import React from "react";
import colors from "tailwindcss/colors";
import { Switch } from "@/components/ui/switch";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";

const SwitchDemo = () => {
  return (
    <Center className="flex-1 bg-background-0">
      <Box className="bg-background-0 px-10 py-5 rounded-full border border-outline-100 shadow-[inset_0_0px_10px_0px_rgba(0,0,0,0.12)]">
        <Switch
          size="lg"
          trackColor={{ false: colors.neutral[300], true: colors.neutral[600] }}
          thumbColor={colors.neutral[50]}
          // @ts-ignore
          activeThumbColor={colors.neutral[50]}
          ios_backgroundColor={colors.neutral[300]}
        />
      </Box>
    </Center>
  );
};

export default SwitchDemo;
