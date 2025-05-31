import UserTable from "./UserTable";
import ExamTable from "./ExamTable";
import AnalyticsCharts from "./AnalyticsCharts";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">InsightBoard Dashboard</h1>
      <UserTable />
      <ExamTable />
      <AnalyticsCharts />
    </div>
  );
}
