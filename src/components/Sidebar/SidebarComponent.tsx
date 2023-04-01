import {
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Box,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import MobileNavComponent from "./MobileNavComponent";
import SidebarContentComponent from "./SidebarContentComponent";

interface Props {
  children: ReactNode;
  selectReportSubmit: (reportId: string) => void;
}

const SidebarComponent: React.FC<Props> = ({
  children,
  selectReportSubmit,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContentComponent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        selectReportSubmit={selectReportSubmit}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContentComponent
            onClose={onClose}
            selectReportSubmit={selectReportSubmit}
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNavComponent onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default SidebarComponent;
