import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";


 function getShadowContainer() {
  return document
    .querySelector("#test-shadow")
    .shadowRoot.querySelector("#plasmo-shadow-container")
}

export default function TestModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        placement="top-center"
        portalContainer={getShadowContainer()}
        onOpenChange={onOpenChange}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" onBlur={e=>console.log(e)}/>
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
