import React from "react";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Center } from "@/components/ui/center";

const TextAreaDemo = () => {
  return (
    <Center className="flex-1 p-6 bg-background-0">
      <Textarea className="items-start">
        <TextareaInput
          placeholder="Your text goes here..." 
          textAlignVertical="top"
        />
      </Textarea>
    </Center>
  );
};

export default TextAreaDemo;
