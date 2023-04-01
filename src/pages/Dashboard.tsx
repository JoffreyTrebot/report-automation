import { useEffect, useState } from "react";

import { Heading } from "@chakra-ui/react";
import { getReportsAction } from "../actions/Report/getReportsAction";
import { useAppDispatch } from "../utils/hook";
import SidebarComponent from "../components/Sidebar/SidebarComponent";
import ReportPage from "./ReportPage";

function Dashboard() {
  const dispatch = useAppDispatch();
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getReportsAction());
  }, []);

  const selectReportSubmit = (reportId: string) => {
    setSelectedReportId(reportId);
    return <ReportPage reportId={reportId} />;
  };

  return (
    <div title="dashboard" className="Dasboard">
      <SidebarComponent selectReportSubmit={selectReportSubmit}>
        <Heading>Bonsoir</Heading>
        <ReportPage reportId={selectedReportId} />
      </SidebarComponent>
    </div>
  );
}

export default Dashboard;
