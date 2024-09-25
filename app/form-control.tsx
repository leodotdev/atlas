import React from "react";
import {
  FormControl,
  FormControlHelper,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { Center } from "@/components/ui/center";

const FormControlDemo = () => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("12345");

  const handleSubmit = () => {
    if (inputValue?.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };
  return (
    <Center className="flex-1">
      <VStack className="w-full max-w-[300px] rounded-md border border-background-300 p-4">
        <FormControl isInvalid={isInvalid}>
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1">
            <InputField
              type="password"
              placeholder="password"
              value={inputValue}
              //@ts-ignore
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Input>

          <FormControlHelper>
            <FormControlHelperText>
              Must be atleast 6 characters.
            </FormControlHelperText>
          </FormControlHelper>

          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <Button
          className="w-fit self-end mt-4"
          size="sm"
          onPress={handleSubmit}
        >
          <ButtonText>Submit</ButtonText>
        </Button>
      </VStack>
    </Center>
  );
};
export default FormControlDemo;
