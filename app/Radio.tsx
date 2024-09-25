import React from "react";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/components/ui/radio";
import { CircleIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { Center } from "@/components/ui/center";

const RadioDemo = () => {
  const [values, setValues] = React.useState("optionA");

  return (
    <Center className="flex-1">
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
    </Center>
  );
};

export default RadioDemo;
