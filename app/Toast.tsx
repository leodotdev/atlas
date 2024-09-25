import React from "react";
import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";
import { Center } from "@/components/ui/center";

const ToastDemo = () => {
  return (
    <Center className="flex-1">
      <Toast>
        <ToastTitle>Hello!</ToastTitle>
        <ToastDescription>This is a customized toast.</ToastDescription>
      </Toast>
    </Center>
  );
};

export default ToastDemo;
