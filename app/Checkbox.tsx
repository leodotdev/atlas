import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import React from "react";

export const CheckboxDemo = () => {
  return (
    <Checkbox value={''}>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  );
};

export default CheckboxDemo;
