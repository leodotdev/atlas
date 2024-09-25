import React, { useState } from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Text } from "@/components/ui/text";
import { OverlayProvider } from "@gluestack-ui/overlay";
import { Center } from "@/components/ui/center";

const AlertDialogDemo = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(false);
  return (
    <OverlayProvider>
      <Center className="flex-1">
        <Button onPress={() => setShowAlertDialog(true)}>
          <ButtonText>Open Dialog</ButtonText>
        </Button>
        <AlertDialog size="lg" isOpen={showAlertDialog} onClose={handleClose}>
          <AlertDialogBackdrop />
          <AlertDialogContent focusScope={false}>
            <AlertDialogHeader>
              <Heading className="text-typography-950 font-semibold" size="md">
                Delete post?
              </Heading>
            </AlertDialogHeader>
            <AlertDialogBody className="mt-2 mb-4">
              <Text size="sm">
                Deleting the post will remove it permanently and cannot be
                undone.
              </Text>
            </AlertDialogBody>
            <AlertDialogFooter className="">
              <Button
                variant="outline"
                action="secondary"
                onPress={handleClose}
                size="sm"
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button size="sm" onPress={handleClose}>
                <ButtonText>Delete</ButtonText>
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Center>
    </OverlayProvider>
  );
};

export default AlertDialogDemo;
