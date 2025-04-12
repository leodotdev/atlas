import React, { useContext } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { ColorModeContext } from "./_layout";
import { cssInterop } from "nativewind";

cssInterop(SafeAreaView, { className: "style" });

export default function NewHomepage() {
  const { colorMode }: any = useContext(ColorModeContext);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background-0">
      <Box className="p-5 items-center">
        <Text className="text-2xl mb-5 text-typography-900">
          Welcome to the App!
        </Text>
        <Text className="mb-3 text-typography-700">
          This is the new homepage.
        </Text>
        <Link
          href="/kitchen-sink"
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          <Text>Go to Kitchen Sink Demos</Text>
        </Link>
      </Box>
    </SafeAreaView>
  );
}
