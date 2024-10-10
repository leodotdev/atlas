import React from "react";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { BadgeText } from "@/components/ui/badge";
import { VStack } from "@/components/ui/vstack";
import { Badge, BadgeIcon } from "@/components/ui/badge";
import { InfoIcon } from "@/components/ui/icon";

const PressableDemo = () => {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <Center className="flex-1">
      <HStack
        className="p-6 max-w-[336px] w-full shadow-hard-5 rounded-lg bg-background-0 border-outline-100"
        space="xl"
      >
        <Box className="w-32 items-center justify-center rounded bg-background-50 flex-shrink-0">
          <Image
            className="w-[94px] h-auto aspect-[534/164]"
            source={{
              uri: "https://i.imgur.com/w4N0SUz.png",
            }}
            alt="image"
          />
        </Box>
        <VStack className="flex-1">
          <Badge action="info" size="sm">
            <BadgeIcon as={InfoIcon} className="mr-1" />
            <BadgeText>new story</BadgeText>
          </Badge>
          <Text className="text-typography-900 font-medium mt-3">
            React OS Winner of 2024
          </Text>
          <Text
            size="sm"
            className={`${readMore ? "line-clamp-none" : "line-clamp-2"}`}
          >
            {/* Gluestack is the React OS winner of 2024 in... */}
            Gluestack is the React OS winner of 2024 in the productivity booster
            category.
          </Text>
          {!readMore && (
            <Pressable className="mt-2" onPress={() => setReadMore(true)}>
              <Text className="text-info-700 font-medium" size="sm">
                Read More
              </Text>
            </Pressable>
          )}
        </VStack>
      </HStack>
    </Center>
  );
};

export default PressableDemo;
