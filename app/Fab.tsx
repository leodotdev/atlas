import React from "react";
import { Fab, FabIcon } from "@/components/ui/fab";
import { Box } from "@/components/ui/box";
import { MenuIcon } from "@/components/ui/icon";

const FabDemo = () => {
  return (
    <Box className="h-[150px] w-[200px] bg-background-100 rounded-md ">
      <Fab placement={'bottom right'}>
        <FabIcon as={MenuIcon} />
      </Fab>
    </Box>
  );
};

export default FabDemo;
