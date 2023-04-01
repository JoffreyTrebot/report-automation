import {
  Text,
  BoxProps,
  useColorModeValue,
  Flex,
  CloseButton,
  Box,
  Select,
} from "@chakra-ui/react";
import { reportsSelector } from "../../selectors/ReportSelectors";
import { useAppSelector } from "../../utils/hook";

interface Props extends BoxProps {
  onClose: () => void;
  selectReportSubmit: (reportId: string) => void;
}

const SidebarContentComponent: React.FC<Props> = ({
  onClose,
  selectReportSubmit,
  ...rest
}) => {
  const reports = useAppSelector(reportsSelector);
  
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="xl" fontFamily="monospace" fontWeight="bold">
          CRA Automation
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Select
        size="lg"
        borderRadius={0}
        borderRightWidth={0}
        borderLeftWidth={0}
        onChange={(e) => selectReportSubmit(e.target.value)}
      >
        <option selected hidden disabled value="">Selectionner un CR</option>
        {reports.map((report) => {
          return <option value={report.id}>{report.name}</option>;
        })}
      </Select>
    </Box>
  );
};

export default SidebarContentComponent;
