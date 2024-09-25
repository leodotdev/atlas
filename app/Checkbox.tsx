import React from "react";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";

export const CheckboxDemo = () => {
  return (
    <Center className="flex-1">
      <Checkbox value={""}>
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label</CheckboxLabel>
      </Checkbox>
    </Center>
  );
};

export default CheckboxDemo;
