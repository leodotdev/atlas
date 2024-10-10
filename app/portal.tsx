import React from "react";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Portal } from "@/components/ui/portal";
import { CloseIcon } from "@/components/ui/icon";

const PortalDemo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Center className="flex-1 bg-background-0 p-6">
      <VStack className="max-w-[336px] w-full" space="md">
        <VStack className="border border-outline-200 rounded-xl p-3">
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/ce91/5efa/1fb17b6f2e672daf91660490e00b5358?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DY6sNaCDFmwkDjOAZQYwyG8u0Ebmj0qduzC10lrpy77WeljBbaUYd2vK6lOEwLsl8WY5I6w3AlO7IZs8gVMtVJJ~f4SJyvUfG-BUwBRSNGp1Tr4KecSSf9zO8yBQl0rpWPdL2ppXGWMXM5xWogEuuGpCgWm2SbE8r5yeE0XpPxVaHaMaaL~rAlgvav~bS1GosP3sMcMcXb4CSUfTvgxUmsgalREtsP4JvZU4ZEWU~2vJtshWG9GExnRJfb29r~TZaxp0KFGdw0-iJ6S2hmjtVNZ6QDzivDYx5ewuil2jp5gXsyTJxG69vjYUefLN81pwE1V9b1lc5Lm62WxCMKa-mg__",
            }}
            alt="image"
            className="w-full aspect-[312/173] rounded"
            // @ts-ignore
            size="none"
          />
          <Text className="mt-6 mb-2">2 shows available on 15 May</Text>
          <Heading>The Sinbad Movie</Heading>
        </VStack>
        <Button onPress={() => setVisible(true)}>
          <ButtonText>Open Portal</ButtonText>
        </Button>
      </VStack>

      <Portal
        isOpen={visible}
        className={`justify-center items-center ${visible ? "bg-background-dark/60" : ""}`}
      >
        <HStack
          className="max-w-[336px] w-full p-5 bg-background-0 shadow-hard-5 rounded-lg border border-outline-300 justify-between"
          space="sm"
        >
          <VStack className="flex-1">
            <Text className="text-typography-900 font-semibold">
              Choose a slot
            </Text>

            <Text className="mt-2 mb-4" size="sm">
              <Text className="font-semibold" size="sm">
                The Sinbad Movie:{" "}
              </Text>
              Legend of the Seven Seas (also known as simply Sinbad) is a 2003
              American animated adventure film produced by DreamWorks Animation
            </Text>

            <ButtonGroup space="md" className="flex flex-row">
              <Button
                variant="outline"
                onPress={() => setVisible(false)}
                size="xs"
              >
                <ButtonText>11:30 AM</ButtonText>
              </Button>
              <Button onPress={() => setVisible(false)} size="xs">
                <ButtonText>12:45 PM</ButtonText>
              </Button>
            </ButtonGroup>
          </VStack>

          <Button
            size="sm"
            variant="link"
            onPress={() => setVisible(false)}
            className=""
          >
            <ButtonIcon as={CloseIcon} />
          </Button>
        </HStack>
      </Portal>
    </Center>
  );
};

export default PortalDemo;
