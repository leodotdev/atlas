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
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

const RadioDemo = () => {
  const [values, setValues] = React.useState("");

  return (
    <Center className="flex-1 bg-background-0">
      <Box className="p-6 rounded-lg border border-outline-200 shadow-hard-5">
        <Text size="xl" className="font-semibold text-typography-900">
          Do you like gluestack?
        </Text>
        <RadioGroup value={values} onChange={setValues} className="mt-6 ml-1">
          <VStack space="lg">
            <Radio value="optionA">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Yes</RadioLabel>
            </Radio>

            <Radio value="optionB">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Also, yes</RadioLabel>
            </Radio>
          </VStack>
        </RadioGroup>
      </Box>
    </Center>
  );
};

export default RadioDemo;
