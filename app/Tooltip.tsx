import React from "react";
import { Tooltip, TooltipContent, TooltipText } from "@/components/ui/tooltip";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";

const DirectionalTooltip = ({ placement, IconComponent }: any) => (
  <Tooltip
    placement={placement}
    trigger={(triggerProps) => (
      <Button variant="link" {...triggerProps}>
        <ButtonIcon as={IconComponent} size="sm" />
      </Button>
    )}
  >
    <TooltipContent>
      <TooltipText>Hello World!</TooltipText>
    </TooltipContent>
  </Tooltip>
);

const TooltipDemo = () => {
  return (
    <Center className="flex-1 bg-background-0">
      <Center className="h-[175px] w-[175px] rounded-lg border border-outline-200 shadow-hard-5 p-2 flex flex-row items-center justify-center gap-2">
        <DirectionalTooltip placement="left" IconComponent={ChevronLeftIcon} />

        <VStack className="items-center justify-between h-full">
          <DirectionalTooltip placement="top" IconComponent={ChevronUpIcon} />

          <Button size="xs" variant="outline">
            <ButtonText>Hover on me!</ButtonText>
          </Button>

          <DirectionalTooltip
            placement="bottom"
            IconComponent={ChevronDownIcon}
          />
        </VStack>

        <DirectionalTooltip
          placement="right"
          IconComponent={ChevronRightIcon}
        />
      </Center>
    </Center>
  );
};

export default TooltipDemo;
