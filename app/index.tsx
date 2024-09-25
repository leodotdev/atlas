import React from "react";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { Pressable } from "@/components/ui/pressable";
import { Link } from "expo-router";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Box } from "@/components/ui/box";
import { content } from "@/utils/content";
import { ScrollView } from "@/components/ui/scroll-view";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <Box className="flex flex-row flex-wrap gap-2 p-4 mx-auto w-fit">
          {content.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="p-2 bg-red-200 rounded-xl h-[150px] w-[150px]"
            >
              {link.title}
            </Link>
          ))}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
