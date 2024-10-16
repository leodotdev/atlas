import React from "react";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import { CheckIcon, Icon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { SafeAreaView } from "@/components/ui/safe-area-view";

const ToastDemo = () => {
  const toast = useToast();
  const [toastId, setToastId] = React.useState("0");
  const handleToast = () => {
    if (!toast.isActive(toastId)) {
      showNewToast();
    }
  };

  const showNewToast = () => {
    const newId = Math.random().toString();
    setToastId(newId);
    toast.show({
      id: newId,
      placement: "top",
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast
            nativeID={uniqueToastId}
            className="flex flex-row gap-2 mx-2 mt-4"
            variant="outline"
            action="success"
          >
            <Icon as={CheckIcon} className="mt-[3px] text-success-800" />
            <VStack>
              <ToastTitle>Completed!</ToastTitle>
              <ToastDescription>File Submitted Successfully.</ToastDescription>
            </VStack>
          </Toast>
        );
      },
    });
  };
  return (
    <SafeAreaView className="flex-1">
      <Center className="flex-1 bg-background-0 p-6">
        <Button onPress={handleToast}>
          <ButtonText>Show Toast</ButtonText>
        </Button>
      </Center>
    </SafeAreaView>
  );
};

export default ToastDemo;
