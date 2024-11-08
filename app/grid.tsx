import React from "react";
import { Center } from "@/components/ui/center";
import { Grid, GridItem } from "@/components/ui/grid";

const GridDemo = () => {
  return (
    <Center className="flex-1 bg-typography-0 p-6">
      <Grid
        className="gap-4 max-w-[600px]"
        _extra={{
          className: "grid-cols-2",
        }}
      >
        <GridItem
          className="border border-dashed border-outline-400 rounded-lg h-[68px]"
          _extra={{
            className: "col-span-1",
          }}
        />
        <GridItem
          className="border border-dashed border-outline-400 rounded-lg h-[68px]"
          _extra={{
            className: "col-span-1",
          }}
        />
        <GridItem
          className="border border-dashed border-outline-400 rounded-lg h-[68px]"
          _extra={{
            className: "col-span-1",
          }}
        />
        <GridItem
          className="border border-dashed border-outline-400 rounded-lg h-[68px]"
          _extra={{
            className: "col-span-1",
          }}
        />
        <GridItem
          className="border border-dashed border-outline-400 rounded-lg h-[68px]"
          _extra={{
            className: "col-span-1",
          }}
        />
        <GridItem
          className="border border-dashed border-outline-400 rounded-lg h-[68px]"
          _extra={{
            className: "col-span-1",
          }}
        />
      </Grid>
    </Center>
  );
};

export default GridDemo;
