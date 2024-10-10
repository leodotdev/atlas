import React from "react";
import { Icon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";
import { Grid, GridItem } from "@/components/ui/grid";
import {
  ArrowDownCircle,
  BookmarkPlus,
  Delete,
  MessageSquare,
  Camera,
} from "lucide-react-native";
import {
  TrashIcon,
  CalendarDaysIcon,
  RepeatIcon,
  CopyIcon,
} from "@/components/ui/icon";
import { Box } from "@/components/ui/box";

const icons = [
  {
    id: 1,
    icon: CopyIcon,
  },
  {
    id: 2,
    icon: TrashIcon,
  },
  {
    id: 3,
    icon: CalendarDaysIcon,
  },
  {
    id: 4,
    icon: ArrowDownCircle,
  },
  {
    id: 5,
    icon: BookmarkPlus,
  },
  {
    id: 6,
    icon: Camera,
  },
  {
    id: 7,
    icon: RepeatIcon,
  },
  {
    id: 8,
    icon: Delete,
  },
  {
    id: 9,
    icon: MessageSquare,
  },
];

const IconDemo = () => {
  return (
    <Center className="flex-1 bg-background-0">
      <Grid
        className="gap-10 w-full max-w-[216px] p-8 rounded-lg shadow-hard-5 border-outline-200 border"
        _extra={{
          className: "grid-cols-3",
        }}
      >
        {icons.map((icon) => {
          return (
            <GridItem
              key={icon.id}
              _extra={{
                className: "col-span-1",
              }}
            >
              <Box className="flex items-center">
                <Icon as={icon.icon} size="xl" />
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Center>
  );
};
export default IconDemo;
