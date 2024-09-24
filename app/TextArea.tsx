import { Textarea, TextareaInput } from "@/components/ui/textarea";
import React from "react";

const TextAreaDemo = () => {
  return (
    <Textarea>
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  );
};

export default TextAreaDemo;
