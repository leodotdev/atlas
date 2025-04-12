import React from "react";
import { Stack, useRouter } from "expo-router";
import { Icon, ChevronLeftIcon } from "@/components/ui/icon";
import { StyleSheet, Platform } from "react-native";
import { Pressable } from "@/components/ui/pressable";

// Import the main color mode context if needed, or manage color mode separately here
// For simplicity, let's assume we still want the main color mode for now
import { ColorModeContext } from "../_layout"; // Adjust path if needed

const CustomBackButton = () => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.back();
      }}
      className="web:ml-2 ios:-ml-2 android:mr-4"
    >
      <Icon as={ChevronLeftIcon} size="xl" />
    </Pressable>
  );
};

export default function KitchenSinkLayout() {
  // Get colorMode from context
  const { colorMode }: any = React.useContext(ColorModeContext);

  const styles = StyleSheet.create({
    header: {
      backgroundColor: colorMode === "light" ? "#fff" : "#000",
      borderBottomColor: colorMode === "light" ? "#E6E6E6" : "#414141",
      borderBottomWidth: 1,
    },
  });

  const getHeaderOptions = (title: string) => ({
    headerTitle: title,
    headerTintColor: colorMode === "light" ? "#000" : "#fff",
    headerStyle: styles.header,
    ...(Platform.OS !== "android" && {
      headerLeft: () => <CustomBackButton />,
    }),
  });

  // Note: We might not need the GluestackUIProvider or ColorModeContext.Provider here
  // if they are already wrapping the entire app in the main _layout.tsx.
  // Let's assume they are in the main layout for now.

  return (
    <Stack screenOptions={{ animation: "slide_from_right" }}>
      {/* The index screen for the kitchen sink doesn't need a header */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* Add all the component screens that are now INSIDE kitchen-sink */}
      <Stack.Screen name="accordion" options={getHeaderOptions("Accordion")} />
      <Stack.Screen
        name="actionsheet"
        options={getHeaderOptions("ActionSheet")}
      />
      <Stack.Screen name="alert" options={getHeaderOptions("Alert")} />
      <Stack.Screen
        name="alert-dialog"
        options={getHeaderOptions("AlertDialog")}
      />
      <Stack.Screen name="avatar" options={getHeaderOptions("Avatar")} />
      <Stack.Screen name="badge" options={getHeaderOptions("Badge")} />
      <Stack.Screen name="box" options={getHeaderOptions("Box")} />
      <Stack.Screen name="button" options={getHeaderOptions("Button")} />
      <Stack.Screen name="card" options={getHeaderOptions("Card")} />
      <Stack.Screen name="center" options={getHeaderOptions("Center")} />
      <Stack.Screen name="checkbox" options={getHeaderOptions("Checkbox")} />
      <Stack.Screen name="divider" options={getHeaderOptions("Divider")} />
      <Stack.Screen name="drawer" options={getHeaderOptions("Drawer")} />
      <Stack.Screen name="fab" options={getHeaderOptions("Fab")} />
      <Stack.Screen
        name="form-control"
        options={getHeaderOptions("FormControl")}
      />
      <Stack.Screen name="grid" options={getHeaderOptions("Grid")} />
      <Stack.Screen name="heading" options={getHeaderOptions("Heading")} />
      <Stack.Screen name="hstack" options={getHeaderOptions("HStack")} />
      <Stack.Screen name="icon" options={getHeaderOptions("Icon")} />
      <Stack.Screen name="image" options={getHeaderOptions("Image")} />
      <Stack.Screen name="input" options={getHeaderOptions("Input")} />
      <Stack.Screen name="link" options={getHeaderOptions("Link")} />
      <Stack.Screen name="menu" options={getHeaderOptions("Menu")} />
      <Stack.Screen name="modal" options={getHeaderOptions("Modal")} />
      <Stack.Screen name="popover" options={getHeaderOptions("Popover")} />
      <Stack.Screen name="portal" options={getHeaderOptions("Portal")} />
      <Stack.Screen name="pressable" options={getHeaderOptions("Pressable")} />
      <Stack.Screen name="progress" options={getHeaderOptions("Progress")} />
      <Stack.Screen name="radio" options={getHeaderOptions("Radio")} />
      <Stack.Screen name="select" options={getHeaderOptions("Select")} />
      <Stack.Screen name="skeleton" options={getHeaderOptions("Skeleton")} />
      <Stack.Screen name="slider" options={getHeaderOptions("Slider")} />
      <Stack.Screen name="spinner" options={getHeaderOptions("Spinner")} />
      <Stack.Screen name="switch" options={getHeaderOptions("Switch")} />
      <Stack.Screen name="table" options={getHeaderOptions("Table")} />
      <Stack.Screen name="text" options={getHeaderOptions("Text")} />
      <Stack.Screen name="textarea" options={getHeaderOptions("TextArea")} />
      <Stack.Screen name="toast" options={getHeaderOptions("Toast")} />
      <Stack.Screen name="tooltip" options={getHeaderOptions("Tooltip")} />
      <Stack.Screen name="vstack" options={getHeaderOptions("VStack")} />
      {/* Add any other screens moved into kitchen-sink here */}
    </Stack>
  );
}
