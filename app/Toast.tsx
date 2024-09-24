import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";
import React from "react";

const ToastDemo = () => {
  return (
    <Toast>
      <ToastTitle>Hello!</ToastTitle>
      <ToastDescription>This is a customized toast.</ToastDescription>
    </Toast>
  );
};

export default ToastDemo;
