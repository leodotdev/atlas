import React from "react";
import "../global.css";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        <Stack.Screen
          name="accordion"
          options={{ headerTitle: "Accordion", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="actionsheet"
          options={{ headerTitle: "ActionSheet", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="alert"
          options={{ headerTitle: "Alert", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="alert-dialog"
          options={{ headerTitle: "AlertDialog", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="avatar"
          options={{ headerTitle: "Avatar", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="badge"
          options={{ headerTitle: "Badge", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="box"
          options={{ headerTitle: "Box", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="button"
          options={{ headerTitle: "Button", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="card"
          options={{ headerTitle: "Card", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="center"
          options={{ headerTitle: "Center", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="checkbox"
          options={{ headerTitle: "Checkbox", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="divider"
          options={{ headerTitle: "Divider", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="drawer"
          options={{ headerTitle: "Drawer", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="fab"
          options={{ headerTitle: "Fab", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="form-control"
          options={{ headerTitle: "FormControl", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="grid"
          options={{ headerTitle: "Grid", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="hstack"
          options={{ headerTitle: "HStack", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="icon"
          options={{ headerTitle: "Icon", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="image"
          options={{ headerTitle: "Image", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="input"
          options={{ headerTitle: "Input", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="link"
          options={{ headerTitle: "Link", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="menu"
          options={{ headerTitle: "Menu", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="modal"
          options={{ headerTitle: "Modal", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="popover"
          options={{ headerTitle: "Popover", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="portal"
          options={{ headerTitle: "Portal", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="pressable"
          options={{ headerTitle: "Pressable", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="progress"
          options={{ headerTitle: "Progress", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="radio"
          options={{ headerTitle: "Radio", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="select"
          options={{ headerTitle: "Select", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="skeleton"
          options={{ headerTitle: "Skeleton", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="slider"
          options={{ headerTitle: "Slider", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="spinner"
          options={{ headerTitle: "Spinner", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="switch"
          options={{ headerTitle: "Switch", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="table"
          options={{ headerTitle: "Table", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="text"
          options={{ headerTitle: "Text", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="textarea"
          options={{ headerTitle: "TextArea", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="toast"
          options={{ headerTitle: "Toast", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="tooltip"
          options={{ headerTitle: "Tooltip", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="vstack"
          options={{ headerTitle: "VStack", headerBackTitle: "Home" }}
        />
      </Stack>
    </GluestackUIProvider>
  );
}
