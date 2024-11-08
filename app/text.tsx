import React from "react";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";

const TextDemo = () => {
  return (
    <Center className="flex-1 p-6 bg-background-0">
      <Box className="max-w-[600px]">
      <Text className="text-2xl font-semibold text-typography-900 mb-3">
        Your Notes
      </Text>
      <Text>
        This is a text. A text is a written or printed work that conveys
        information, ideas, thoughts, or emotions through language. It can take
        various forms, such as books, articles, essays, messages, and can serve
        multiple purposes, including communication, entertainment, etc. In a
        broader sense, a "text" refers to any coherent and meaningful collection
        of words that can be read and interpreted.
      </Text>
      </Box>
    </Center>
  );
};

export default TextDemo;
