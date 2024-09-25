import React from "react";
import colors from "tailwindcss/colors";
import { Switch } from "@/components/ui/switch";
import { Center } from "@/components/ui/center";

const SwitchDemo = () => {
  return (
    <Center className="flex-1">
      <Switch
        size="lg"
        trackColor={{ false: colors.neutral[300], true: colors.neutral[600] }}
        thumbColor={colors.neutral[50]}
        activeThumbColor={colors.neutral[50]}
        ios_backgroundColor={colors.neutral[300]}
      />
    </Center>
  );
};

export default SwitchDemo;
