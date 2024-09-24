import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/components/ui/radio";
import { CircleIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";

const RadioDemo = () => {
  const [values, setValues] = React.useState('optionA');

  return (
    <RadioGroup value={values} onChange={setValues}>
      <VStack space="md">
        <Radio value="optionA">
          <RadioLabel>Option A</RadioLabel>
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
        </Radio>
        <Radio value="optionB">
          <RadioLabel>Option B</RadioLabel>
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
        </Radio>
      </VStack>
    </RadioGroup>
  );
};

export default RadioDemo;
