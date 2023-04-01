import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./utils/hook";
import {
  isLoadingReportsSelector,
  reportsSelector,
} from "./selectors/ReportSelectors";
import { getReportsAction } from "./actions/Report/getReportsAction";
import ReportModalComponent from "./components/Report/ReportModalComponent";
import { useDisclosure } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";

function App() {
  const dispatch = useAppDispatch();
  const reports = useAppSelector(reportsSelector);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
    dispatch(getReportsAction());
  }, []);

  if(reports.length >= 1) {
    return (
      <Dashboard />
    );
  }

  return (
    <div className="App">
      <ReportModalComponent isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default App;
