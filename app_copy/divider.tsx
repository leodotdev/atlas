import React from "react";
import { Divider } from "@/components/ui/divider";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";

const DividerDemo = () => {
  return (
    <Center className="flex-1 bg-background-0 px-6">
      <VStack className="w-full max-w-[400px]">
        <HStack className="gap-2.5">
          <Text className="font-semibold">Your Contacts</Text>
          <Box className="bg-background-50 px-2.5 py-1 rounded-full">
            <Text size="xs" className="text-typography-900">
              240
            </Text>
          </Box>
        </HStack>
        <VStack className="mt-7">
          <HStack space="sm" className="items-center mx-2">
            <Avatar className="h-9 w-9">
              <AvatarFallbackText>John Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/a79d/1ff1/6a7cb1f02421864efd59af9ee38fbc63?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DGpMw7L7qlj2seEILZ6bSW3NP-vtOkpFnZo-e-uTwyk2QkvrMoCWsTNh7A2xoemDAMA0GBe1LDlcou~fgDeAlaFnDE5U92cm~NjvS3Iln16x5~pxpvHRCv-0l0~mJgREESg4tPZ96xlWv0yUer6m0INd-jZncNv0in3xclVCFiYTdmEcKsUeCq4g6wgoYSO1yQGmUn4qjcBtklW4hGqupJfUaaRG~hh9hJ8dK4y~9ZQpfKmZOX1mqT4SinH25Iqx84EA5Aaz5nKyS3RhmM895ozQ-Kq3xI4V8ukQr8swzAMwbBqfK6Lw68hRhvPJDcn~doz6iTUj-C9obW--xf3c~A__",
                }}
              />
            </Avatar>
            <Text>Alice</Text>
          </HStack>
          <Divider className="my-2" />
          <HStack space="sm" className="items-center mx-2">
            <Avatar className="h-9 w-9">
              <AvatarFallbackText>John Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/69e2/df8f/ffaab380274c77955b489b4a99200855?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8qtY7mtUGUIJ7qPnUYUBmw5h1RuQXUEI74fuwxCWIGcMdychBBi2iaHZlkswE9-Wu1b2Ky3FRrCFDx3K0WupTu5Nq9MU~BhW8kyQ1RDUznngdNuUCcg5cWkPIB9F6qBrgnshIXwOrUsaJ6z9kCyfc0kzZzUHCIk7Yf20GGnOAXqOv8kqQTCM2Je-NEiPixjxCuFJQRnz-dW3JiybQBOp0VNxPptzssp4ZGxIakAD6SdiV6pgZZFOSJK5roYK9q-xelHJGr8T8q04vPFNgg~KvqKJVlxqI3mXyuBNP0nWjvjVXjuM~N1fLoRqDMJBVizQDqx4RYEw6bj~i2jCEurCQ__",
                }}
              />
            </Avatar>
            <Text>Brandon</Text>
          </HStack>
          <Divider className="my-2" />
          <HStack space="sm" className="items-center mx-2">
            <Avatar className="h-9 w-9">
              <AvatarFallbackText>John Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/33ac/2d2d/067fc79592549e5708555b942a7126c9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oJAvO5s0tpBpDVBIu~J2qIIOGdF-3jExn-agf81y6DJDgx-enbWabTmlwI4KIJkWSCcOqaFJZb5Q6mbT6~BgKp3veFOwvVGlIn0W0Z7tD0K55H9pQN9GtaDNmG-J6NHTwG~5DSXnQFO21t6A230IGS~6KaZXGoZ2b6WXKnfg3yt52dtR2Ef~OWCszRYQSPr5hTJlKAdiLKYfaDV5qa-xEm7BPH3sqF0teYB-pcp3q-QIVkQySPa7ohu-1JHU2ocfagZkioy9n4yiWiKI~PQG4Ytepa-oCMhMQjrczDNw91bZZBfx5wS6bVlxKvPwDl6SZkt-3Kbd7FTNUPiBPPcNjg__",
                }}
              />
            </Avatar>
            <Text>Carl</Text>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
};

export default DividerDemo;
