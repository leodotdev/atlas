import React from "react";
import { Tooltip, TooltipContent, TooltipText } from "@/components/ui/tooltip";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";

const TooltipDemo = () => {
  return (
    <Center className="flex-1">
      <Tooltip
        placement="top"
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Hover on me!</ButtonText>
          </Button>
        );
      }}
    >
      <TooltipContent>
        <TooltipText>Tooltip</TooltipText>
      </TooltipContent>
      </Tooltip>
    </Center>
  );
};

export default TooltipDemo;
