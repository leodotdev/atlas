import React from "react";
import "../global.css";
import { Stack, useNavigation } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Icon, ChevronLeftIcon, SunIcon, MoonIcon } from "@/components/ui/icon";
import { cssInterop } from "nativewind";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Fab } from "@/components/ui/fab";

cssInterop(TouchableOpacity, { className: "style" });
export const ColorModeContext = React.createContext({});

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
  const [colorMode, setColorMode] = React.useState<"light" | "dark">("light");

  const styles = StyleSheet.create({
    header: {
      backgroundColor: colorMode === "light" ? "#fff" : "#000",
      borderBottomColor: colorMode === "light" ? "#E6E6E6" : "#414141",
      borderBottomWidth: 1,
    },
  });

  const handleColorMode = () => {
    setColorMode((prevMode: string) =>
      prevMode === "light" ? "dark" : "light"
    );
  };
  return (
    <ColorModeContext.Provider value={{ colorMode }}>
      <GluestackUIProvider mode={colorMode}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
          <Stack.Screen
            name="accordion"
            options={{
              headerTitle: "Accordion",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="actionsheet"
            options={{
              headerTitle: "ActionSheet",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="alert"
            options={{
              headerTitle: "Alert",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="alert-dialog"
            options={{
              headerTitle: "AlertDialog",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="avatar"
            options={{
              headerTitle: "Avatar",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="badge"
            options={{
              headerTitle: "Badge",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="box"
            options={{
              headerTitle: "Box",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="button"
            options={{
              headerTitle: "Button",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="card"
            options={{
              headerTitle: "Card",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="center"
            options={{
              headerTitle: "Center",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="checkbox"
            options={{
              headerTitle: "Checkbox",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="divider"
            options={{
              headerTitle: "Divider",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="drawer"
            options={{
              headerTitle: "Drawer",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="fab"
            options={{
              headerTitle: "Fab",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="form-control"
            options={{
              headerTitle: "FormControl",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="grid"
            options={{
              headerTitle: "Grid",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="heading"
            options={{
              headerTitle: "Heading",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="hstack"
            options={{
              headerTitle: "HStack",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="icon"
            options={{
              headerTitle: "Icon",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="image"
            options={{
              headerTitle: "Image",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="input"
            options={{
              headerTitle: "Input",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="link"
            options={{
              headerTitle: "Link",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="menu"
            options={{
              headerTitle: "Menu",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="modal"
            options={{
              headerTitle: "Modal",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="popover"
            options={{
              headerTitle: "Popover",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="portal"
            options={{
              headerTitle: "Portal",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="pressable"
            options={{
              headerTitle: "Pressable",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="progress"
            options={{
              headerTitle: "Progress",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="radio"
            options={{
              headerTitle: "Radio",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="select"
            options={{
              headerTitle: "Select",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="skeleton"
            options={{
              headerTitle: "Skeleton",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="slider"
            options={{
              headerTitle: "Slider",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="spinner"
            options={{
              headerTitle: "Spinner",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="switch"
            options={{
              headerTitle: "Switch",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="table"
            options={{
              headerTitle: "Table",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="text"
            options={{
              headerTitle: "Text",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="textarea"
            options={{
              headerTitle: "TextArea",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="toast"
            options={{
              headerTitle: "Toast",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="tooltip"
            options={{
              headerTitle: "Tooltip",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
          <Stack.Screen
            name="vstack"
            options={{
              headerTitle: "VStack",
              headerTintColor: colorMode === "light" ? "#000" : "#fff",
              headerStyle: styles.header,
              headerLeft: () => <CustomBackButton />,
            }}
          />
        </Stack>

        <Fab
          className="bottom-10 sm:right-10 right-6 p-4 z-0"
          onPress={handleColorMode}
        >
          <Icon
            as={colorMode === "light" ? SunIcon : MoonIcon}
            className="text-typography-0"
          />
        </Fab>
      </GluestackUIProvider>
    </ColorModeContext.Provider>
  );
}
