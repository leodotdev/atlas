import React from "react";
import "../global.css";
import { Stack, useNavigation } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Icon, ChevronLeftIcon } from "@/components/ui/icon";
import { cssInterop } from "nativewind";
import { TouchableOpacity } from "react-native";

cssInterop(TouchableOpacity, { className: "style" });
const CustomBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="web:ml-2 ios:-ml-2 android:-ml-1 android:mr-4"
    >
      <Icon as={ChevronLeftIcon} size="xl" />
    </TouchableOpacity>
  );
};

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        <Stack.Screen
          name="accordion"
          options={{
            headerTitle: "Accordion",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="actionsheet"
          options={{
            headerTitle: "ActionSheet",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="alert"
          options={{
            headerTitle: "Alert",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="alert-dialog"
          options={{
            headerTitle: "AlertDialog",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="avatar"
          options={{
            headerTitle: "Avatar",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="badge"
          options={{
            headerTitle: "Badge",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="box"
          options={{
            headerTitle: "Box",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="button"
          options={{
            headerTitle: "Button",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="card"
          options={{
            headerTitle: "Card",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="center"
          options={{
            headerTitle: "Center",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="checkbox"
          options={{
            headerTitle: "Checkbox",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="divider"
          options={{
            headerTitle: "Divider",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="drawer"
          options={{
            headerTitle: "Drawer",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="fab"
          options={{
            headerTitle: "Fab",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="form-control"
          options={{
            headerTitle: "FormControl",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="grid"
          options={{
            headerTitle: "Grid",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="hstack"
          options={{
            headerTitle: "HStack",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="icon"
          options={{
            headerTitle: "Icon",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="image"
          options={{
            headerTitle: "Image",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="input"
          options={{
            headerTitle: "Input",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="link"
          options={{
            headerTitle: "Link",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="menu"
          options={{
            headerTitle: "Menu",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            headerTitle: "Modal",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="popover"
          options={{
            headerTitle: "Popover",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="portal"
          options={{
            headerTitle: "Portal",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="pressable"
          options={{
            headerTitle: "Pressable",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="progress"
          options={{
            headerTitle: "Progress",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="radio"
          options={{
            headerTitle: "Radio",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="select"
          options={{
            headerTitle: "Select",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="skeleton"
          options={{
            headerTitle: "Skeleton",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="slider"
          options={{
            headerTitle: "Slider",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="spinner"
          options={{
            headerTitle: "Spinner",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="switch"
          options={{
            headerTitle: "Switch",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="table"
          options={{
            headerTitle: "Table",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="text"
          options={{
            headerTitle: "Text",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="textarea"
          options={{
            headerTitle: "TextArea",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="toast"
          options={{
            headerTitle: "Toast",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="tooltip"
          options={{
            headerTitle: "Tooltip",
            headerLeft: () => <CustomBackButton />,
          }}
        />
        <Stack.Screen
          name="vstack"
          options={{
            headerTitle: "VStack",
            headerLeft: () => <CustomBackButton />,
          }}
        />
      </Stack>
    </GluestackUIProvider>
  );
}
