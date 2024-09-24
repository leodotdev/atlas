import React from "react";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { Pressable } from "@/components/ui/pressable";
import { Link } from "expo-router";
import { SafeAreaView } from "@/components/ui/safe-area-view";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Link href="/Button">Button</Link>
      <Link href="/ActionSheet">Button Outline</Link>
    </SafeAreaView>
  );
}
