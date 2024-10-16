import React from "react";
import { Spinner } from "@/components/ui/spinner";
import colors from "tailwindcss/colors";
import { Center } from "@/components/ui/center";

const SpinnerDemo = () => {
  return (
    <Center className="flex-1 bg-background-0">
      <Spinner size="large" color={colors.gray[500]} />
    </Center>
  );
};

export default SpinnerDemo;
