import React, { useState } from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { Icon, CloseIcon } from "@/components/ui/icon";

const AlertDialogDemo = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(false);
  return (
    <Center className="flex-1 bg-background-0">
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Open Dialog</ButtonText>
      </Button>
      <AlertDialog size="lg" isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              Delete post?
            </Heading>
            <AlertDialogCloseButton onPress={handleClose}>
              <Icon
                as={CloseIcon}
                className="stroke-background-400 group-[:hover]/alert-dialog-close-button:stroke-background-700 group-[:active]/alert-dialog-close-button:stroke-background-900 group-[:focus-visible]/alert-dialog-close-button:stroke-background-900"
              />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody className="mb-4">
            <Text size="sm">
              Deleting the post will remove it permanently and cannot be undone.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="">
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="xs"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="xs" onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Center>
  );
};

export default AlertDialogDemo;
