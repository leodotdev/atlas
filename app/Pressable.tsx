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

// const PressableDemo = () => {
//   return (
//     <Center className="flex-1">
//       <Pressable
//         // eslint-disable-next-line no-console
//         onPress={() => console.log("Hello")}
//         className="p-5 bg-primary-500"
//       >
//         <Text className="text-typography-0">Press me</Text>
//       </Pressable>
//     </Center>
//   );
// };

// export default PressableDemo;

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
              uri: "https://s3-alpha-sig.figma.com/img/f352/23e6/1854e6bd23003fbec7b50971b17c90b1?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S4khw4550567Dy1asVtemxArehBO5YzwEgNJe8P7xEnkpttB3nPwyTBTWsZWnAHKshGD52b7vsW8pDbE~APfca~udnZFXl1GD1sO3AkkxTirK8j3k4SP8BaOM1K~Y~iRIaI51hDWs5~a8cQTyLmmZ~BXNbA0Pvd8Ylu3y00rHKt6iM8tbX5wqbUvDzHxvlPE0tuIq2I0Gedsl4h~X557hgk70MErZMfjFajJczNzOJ6tzM4I4z1jioXULQeJl1rW79Ei730cOBk4U8E5B9~sfTlUCEOT7GTRHhyRR5kyT5hZh99iMZ~9qKpGoJBLxMCsJEnwYrZav6r3eKC9NHH56w__",
            }}
            alt="image"
          />
        </Box>
        <VStack>
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
