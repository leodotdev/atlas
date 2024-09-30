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

const TooltipDemo = () => {
  return (
    <Center className="flex-1 bg-background-0">
      <Center className="h-[175px] w-[175px] rounded-lg border border-outline-200 shadow-hard-5 p-2 flex flex-row items-center justify-center gap-2">
        <Tooltip
          placement={"left"}
          trigger={(triggerProps) => {
            return (
              <Button variant="link" {...triggerProps}>
                <ButtonIcon as={ChevronLeftIcon} size="sm" />
              </Button>
            );
          }}
        >
          <TooltipContent>
            <TooltipText>Hello World!</TooltipText>
          </TooltipContent>
        </Tooltip>

        <VStack className="items-center justify-between h-full">
          <Tooltip
            placement={"top"}
            trigger={(triggerProps) => {
              return (
                <Button variant="link" {...triggerProps}>
                  <ButtonIcon as={ChevronUpIcon} size="sm" />
                </Button>
              );
            }}
          >
            <TooltipContent>
              <TooltipText>Hello World!</TooltipText>
            </TooltipContent>
          </Tooltip>

          <Button size="xs" variant="outline">
            <ButtonText>Hover on me!</ButtonText>
          </Button>

          <Tooltip
            placement={"bottom"}
            trigger={(triggerProps) => {
              return (
                <Button variant="link" {...triggerProps}>
                  <ButtonIcon as={ChevronDownIcon} size="sm" />
                </Button>
              );
            }}
          >
            <TooltipContent>
              <TooltipText>Hello World!</TooltipText>
            </TooltipContent>
          </Tooltip>
        </VStack>

        <Tooltip
          placement={"right"}
          trigger={(triggerProps) => {
            return (
              <Button variant="link" {...triggerProps}>
                <ButtonIcon as={ChevronRightIcon} size="sm" />
              </Button>
            );
          }}
        >
          <TooltipContent>
            <TooltipText>Hello World!</TooltipText>
          </TooltipContent>
        </Tooltip>
      </Center>
    </Center>
  );
};

export default TooltipDemo;
