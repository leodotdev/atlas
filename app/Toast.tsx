import React from "react";
import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import { HelpCircleIcon, Icon, CalendarDaysIcon } from "@/components/ui/icon";

const ToastDemo = () => {
  return (
    <Center className="flex-1 bg-background-0 p-6">
      <Toast className="flex flex-row gap-2" variant="outline" action="success">
        <Icon as={HelpCircleIcon} className="mt-[3px] text-success-800" />
        <VStack>
          <ToastTitle>Toast Heading!</ToastTitle>
          <ToastDescription>
            Description: Lorem ipsum dolor sit amet consectetur.
          </ToastDescription>
        </VStack>
      </Toast>
    </Center>
  );
};

export default ToastDemo;
