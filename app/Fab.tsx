import React from "react";
import { Fab, FabIcon } from "@/components/ui/fab";
import { Box } from "@/components/ui/box";
import { MenuIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";

const FabDemo = () => {
  return (
    <Center className="flex-1">
      <Box className="h-[150px] w-[200px] bg-background-200 rounded-md ">
        <Fab placement={"bottom right"}>
          <FabIcon as={MenuIcon} />
        </Fab>
      </Box>
    </Center>
  );
};

export default FabDemo;
