import React from "react";
import { Spinner } from "@/components/ui/spinner";
import colors from "tailwindcss/colors";

const SpinnerDemo = () => {
  return <Spinner size="large" color={colors.gray[500]} />;
};

export default SpinnerDemo;
