import React from "react";
import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { InfoIcon } from "@/components/ui/icon";

const AlertDemo = () => {
  return (
    <Alert>
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
  );
};

export default AlertDemo;
