import React from "react";
import { Icon, EditIcon } from "@/components/ui/icon";
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
        className="gap-10 max-w-[216px] w-full items-center justify-center bg-background-0 rounded-lg border border-outline-200 p-8 shadow-hard-5"
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
              <Icon as={icon.icon} size="xl" />
            </GridItem>
          );
        })}
      </Grid>
    </Center>
  );
};
export default IconDemo;
