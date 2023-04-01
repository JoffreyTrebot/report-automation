import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  isCancelable?: boolean;
  children: React.ReactNode;
}

const NameComponent: React.FC<Props> = ({title, isOpen, onClose, isCancelable, children}) => {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {children}
        </ModalBody>
        <ModalFooter>
          {isCancelable ? <Button onClick={onClose}>Annuler</Button> : null}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default NameComponent;
