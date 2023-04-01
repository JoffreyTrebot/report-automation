import React from "react";
import ModalComponent from "../ModalComponent";
import ReportButtonComponent from "./AddReportButtonComponent";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ReportModalComponent: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <ModalComponent title="Nouveau Compte Rendu" isOpen={isOpen} onClose={onClose}>
      <ReportButtonComponent />
    </ModalComponent>
  );
};
export default ReportModalComponent;
