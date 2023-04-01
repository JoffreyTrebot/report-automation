import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import Report from "../../domain/entities/Report";
import { useAppDispatch } from "../../utils/hook";
import { addReportAction } from "../../actions/Report/addReportAction";

interface Props {}

const AddReportButtonComponent: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const [reportName, setReportName] = useState<string>("");
  const [isErrorSubmit, setIsErrorSubmit] = useState<boolean>(false);

  const reportNameSubmit = async () => {
    setIsErrorSubmit(false);
    if (reportName !== undefined && reportName !== "") {
      dispatch(addReportAction(new Report(reportName)));
    } else {
      setIsErrorSubmit(true);
    }
  };

  return (
    <div>
      <Flex gap={5}>
        <Input
          placeholder="Report name"
          value={reportName}
          onChange={(event) => setReportName(event.target.value)}
        />
        <Button colorScheme={"blue"} onClick={() => reportNameSubmit()}>
          Créer
        </Button>
        {isErrorSubmit ? (
          <Text color={"red"}>
            Le nom de votre compte rendu n'est pas valide.
          </Text>
        ) : null}
      </Flex>
    </div>
  );
};
export default AddReportButtonComponent;
