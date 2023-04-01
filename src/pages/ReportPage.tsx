
import { Heading } from "@chakra-ui/react";

interface Props {
  reportId?: string | null;
}

const ReportPage: React.FC<Props> = ({ reportId }) => {
  if(reportId === null || reportId === undefined) {
    return <div title="report-page-empty" className="ReportPage">No report selected</div>;
  }

  return (
    <div title="report-page" className="ReportPage">
      <Heading>Bonsoir - {reportId}</Heading>
    </div>
  );
};

export default ReportPage;
