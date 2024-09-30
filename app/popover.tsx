import React from "react";
import { Center } from "@/components/ui/center";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@/components/ui/popover";

const PopoverDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Center className="flex-1 bg-typography-0 p-6">
      <VStack space="md" className="max-w-[336px] w-full">
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/a4f6/9fd3/9466134c3838d0338a7a9d07cf1fb3b5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hWtl~YvFyoO6wL3O9S-~Rs~QbZq8hXvK5RvI6TcTt-5Eii87iTORDqK5VMU0vIAAlwRhWz~L-3PaQhSYkc1akHHNYQixN3FlUDEIUIlirjLd8MZA9K-ZGYuXRtYrnft0gRDCwDFB-HZDZ15mNo12a0pVYT1WxxB-vu-TTvmOC8dy6K19ASWAvCsyija4Ysr5Dm8U7-~Rdg6S1Y~~22N9d8hYYhuMx0VRRPP7v8p8woKsjR84LLiyrN8WVY~f4Gt7A8MZAjHtnQ0CylMBQmcg2gI4eQw7yrF98HNo99YAtVH7Qv-4zfxjGqHWlKlJD49Hd6ePEgSIdqc0mfUNL3oVrw__",
          }}
          alt="image"
          className="w-full aspect-[336/173] rounded-lg"
          //@ts-ignore
          size="none"
        />
        <Popover
          isOpen={isOpen}
          onClose={handleClose}
          onOpen={handleOpen}
          placement="bottom"
          size="md"
          trigger={(triggerProps) => {
            return (
              <Button {...triggerProps}>
                <ButtonText>Open Popover</ButtonText>
              </Button>
            );
          }}
        >
          <PopoverBackdrop />
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Text className="text-typography-900">
                Alex, Annie and many others are already enjoying the Pro
                features, don't miss out on the fun!
              </Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </VStack>
    </Center>
  );
};

export default PopoverDemo;
