import React from "react";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { BadgeText } from "@/components/ui/badge";
import { VStack } from "@/components/ui/vstack";
import { Badge } from "@/components/ui/badge";

const PressableDemo = () => {
  const [pressed, setPressed] = React.useState(false);

  return (
    <Center className="flex-1 px-4 bg-background-0">
      <Pressable
        className={`p-6 max-w-[336px] w-full shadow-hard-5 rounded-lg bg-background-0 border border-outline-100 gap-5 flex flex-row ${pressed ? "scale-95" : ""}`}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
      >
        {/* <Box className="w-32 items-center justify-center rounded bg-background-50 flex-shrink-0">
          <Image
            className="w-[94px] h-auto aspect-[534/164]"
            source={{
              uri: "https://i.imgur.com/w4N0SUz.png",
            }}
            alt="image"
          />
        </Box> */}
        <Image
          className="max-w-32 w-full h-auto aspect-[1/1]"
          source={{
            uri: "https://i.imgur.com/FuFpo1s.png",
          }}
          alt="image"
        />
        <VStack className="flex-1">
          <Badge action="info" size="sm" className="w-fit">
            <BadgeText>new story</BadgeText>
          </Badge>
          <Text className="text-typography-900 font-medium mt-3">
            React OS Winner of 2024
          </Text>
          <Text size="sm" className="line-clamp-2">
            Gluestack is the React OS winner of 2024 in the productivity booster
            category.
          </Text>
        </VStack>
      </Pressable>
    </Center>
  );
};

export default PressableDemo;
