import React from "react";
import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { InfoIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";

const AlertDemo = () => {
  return (
    <Center className="flex-1">
      <Alert>
        <AlertIcon as={InfoIcon} />
        <AlertText>Description of alert!</AlertText>
      </Alert>
    </Center>
  );
};

export default AlertDemo;
