import React from "react";
import { OverlayProvider } from "@gluestack-ui/overlay";
import {
  ModalBackdrop,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Heading } from "@/components/ui/heading";
import { Button, ButtonText } from "@/components/ui/button";
import { Icon, CloseIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";

const ModalDemo = () => {
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);

  return (
    <OverlayProvider>
      <Center className="flex-1">
        <Button onPress={() => setShowModal(true)} ref={ref}>
          <ButtonText>Show Modal</ButtonText>
        </Button>
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          size="lg"
          finalFocusRef={ref}
        >
          <ModalBackdrop />
          <ModalContent focusScope={false}>
            <ModalHeader>
              <Heading size="lg">Engage with Modals</Heading>
              <ModalCloseButton
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Icon
                  as={CloseIcon}
                  size="md"
                  className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
                />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <Text>Elevate user interactions with our versatile modals.</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                size="sm"
                action="secondary"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                size="sm"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Explore</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </OverlayProvider>
  );
};

export default ModalDemo;
