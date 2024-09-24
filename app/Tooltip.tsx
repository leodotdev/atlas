import { Tooltip, TooltipContent, TooltipText } from "@/components/ui/tooltip";
import { Button, ButtonText } from "@/components/ui/button";
import React from "react";

const TooltipDemo = () => {
  return (
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
  );
};

export default TooltipDemo;
