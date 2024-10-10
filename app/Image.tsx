import React from "react";
import { Image } from "@/components/ui/image";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { ScrollView } from "react-native";

const ImageDemo = () => {
  return (
    <Center className="flex-1 p-6 bg-background-0">
      <HStack
        space="lg"
        className="max-h-[272px] max-w-[372px] h-full w-full m-6 overflow-hidden"
      >
        <ScrollView className="pr-2">
          <Box className="border border-outline-300 rounded items-center justify-center bg-background-0 h-[76px] w-[76px] flex-shrink-0">
            <Image
              size="sm"
              source={{
                uri: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2367&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              alt="image"
            />
          </Box>
          <Box className="border border-outline-300 rounded items-center justify-center bg-background-0 h-[76px] w-[76px] flex-shrink-0 my-2">
            <Image
              size="sm"
              source={{
                uri: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              alt="image"
            />
          </Box>
          <Box className="border border-outline-300 rounded items-center justify-center bg-background-0 h-[76px] w-[76px] flex-shrink-0 mb-2">
            <Image
              size="sm"
              source={{
                uri: "https://images.unsplash.com/photo-1657364890921-dbd85cf0398b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              alt="image"
            />
          </Box>
          <Box className="border border-outline-300 rounded items-center justify-center bg-background-0 h-[76px] w-[76px] flex-shrink-0">
            <Image
              size="sm"
              source={{
                uri: "https://images.unsplash.com/photo-1618354691714-7d92150909db?q=80&w=3867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              alt="image"
            />
          </Box>
        </ScrollView>

        <VStack className="p-2">
          <Image
            size="2xl"
            source={{
              uri: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            alt="image"
          />
        </VStack>
      </HStack>
    </Center>
  );
};

export default ImageDemo;
