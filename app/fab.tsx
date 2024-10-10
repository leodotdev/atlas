import React from "react";
import { Fab, FabIcon } from "@/components/ui/fab";
import { Box } from "@/components/ui/box";
import { MenuIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import {
  Popover,
  PopoverArrow,
  PopoverBackdrop,
  PopoverBody,
  PopoverContent,
} from "@/components/ui/popover";

const FabDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Center className="flex-1">
      <Popover
        isOpen={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        placement="top"
        trigger={(triggerProps) => {
          return (
            <Box className="h-[150px] w-[200px] bg-background-0 rounded-md">
              <Fab placement={"bottom right"} {...triggerProps}>
                <FabIcon as={MenuIcon} />
              </Fab>
            </Box>
          );
        }}
      >
        <PopoverBackdrop />
        <PopoverContent className="p-3">
          {/* @ts-ignore */}
          <PopoverArrow />
          <PopoverBody>
            <Text className="text-typography-900">How may I help you!</Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  );
};

export default FabDemo;
