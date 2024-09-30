import React from "react";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Center } from "@/components/ui/center";

const TextAreaDemo = () => {
  return (
    <Center className="flex-1 p-6">
      <Textarea>
        <TextareaInput placeholder="Your text goes here..." />
      </Textarea>
    </Center>
  );
};

export default TextAreaDemo;
