import React, { useContext } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { componentsList } from "@/utils/list";
import { ScrollView } from "@/components/ui/scroll-view";
import { Grid, GridItem } from "@/components/ui/grid";
import { Box } from "@/components/ui/box";
import { Image as ExpoImage } from "expo-image";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { cssInterop } from "nativewind";
import { ColorModeContext } from "./_layout";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";

cssInterop(SafeAreaView, { className: "style" });
cssInterop(ExpoImage, { className: "style" });

const ComponentCard = ({ component, onPress }: any) => {
  const { colorMode }: any = useContext(ColorModeContext);
  return (
    <Pressable
      className={`flex-1 min-[550px]:p-3 p-2 rounded-lg bg-background-0 w-full max-w-[400px] h-full aspect-[4/3] sm:gap-2 gap-1 flex flex-col ${colorMode === "light" ? "shadow-[0px_0px_4.374px_0px_rgba(38,38,38,0.10)]" : "shadow-soft-1 border border-outline-50"}`}
      onPress={onPress}
    >
      <Box className="flex-1 rounded-lg bg-background-50 min-[550px]:p-4 p-2">
        <ExpoImage
          source={{
            uri: colorMode === "light" ? component.url : component.darkUrl,
          }}
          alt={component.title}
          className={`flex-1 rounded shadow-[0px_0px_1.998px_0px_rgba(38,38,38,0.10)]`}
          cachePolicy="memory-disk"
        />
      </Box>
      <Text className="text-typography-900 font-medium sm:text-base text-sm ml-1">
        {component.title}
      </Text>
    </Pressable>
  );
};

const Header = () => {
  const { colorMode }: any = useContext(ColorModeContext);
  return (
    <HStack className="flex-1 max-w-[1600px] w-full mx-auto justify-between">
      <VStack className="w-full max-w-[515px] mx-5 my-8 xl:ml-[120px] flex-1">
        <HStack
          className="rounded-full bg-background-0 py-4 px-5 mb-7 items-center native:max-w-[250px] w-fit"
          space="sm"
        >
          <ExpoImage
            source={{
              uri:
                colorMode === "light"
                  ? "https://i.imgur.com/9bvua6C.png"
                  : "https://i.imgur.com/EUqtUMu.png",
            }}
            alt="logo_image"
            className="h-5 w-5 rounded-sm"
          />
          <Text size="sm" className="font-medium">
            Powered by gluestack-ui v2
          </Text>
        </HStack>
        <Heading size="3xl" className="mb-2">
          Kitchensink app
        </Heading>
        <Text size="sm">
          KitchenSink is a comprehensive demo app showcasing all the NativeBase
          components in action. It includes buttons, forms, icons and much more!
        </Text>
      </VStack>
      <VStack className="hidden lg:flex flex-1 max-h-[310px] h-full aspect-[1030/510]">
        <ExpoImage
          source={{
            uri:
              colorMode === "light"
                ? "https://i.imgur.com/cFm8e9R.png"
                : "https://i.imgur.com/2sE0Z6X.png",
          }}
          alt="header_image"
          className="flex-1"
          cachePolicy="memory-disk"
        />
      </VStack>
    </HStack>
  );
};

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-50 relative">
      <ScrollView className="flex-1">
        <Box className="bg-background-50 flex-1">
          <Header />
        </Box>
        <Box className="bg-background-0">
          <Grid
            className="gap-3 lg:gap-5 min-[550px]:px-[60px] lg:px-[80px] min-[1200px]:px-[100px] min-[550px]:py-6 p-4 max-w-[1600px] mx-auto"
            _extra={{
              className: "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4",
            }}
          >
            {componentsList.map((component, index) => (
              <GridItem key={index} _extra={{ className: "col-span-1" }}>
                <ComponentCard
                  component={component}
                  //@ts-ignore
                  onPress={() => router.push(component.link)}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
