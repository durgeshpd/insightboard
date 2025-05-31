import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import api from "../utils/api";
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function AnalyticsCharts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/analytics").then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading analytics...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Pass/Fail Distribution</h2>
        <Pie
          data={{
            labels: ["Passed", "Failed"],
            datasets: [
              {
                data: [data.passed, data.failed],
                backgroundColor: ["#4ade80", "#f87171"],
              },
            ],
          }}
        />
      </div>
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Exam Stats</h2>
        <Bar
          data={{
            labels: ["Total Exams", "Passed", "Failed"],
            datasets: [
              {
                label: "Count",
                data: [data.total, data.passed, data.failed],
                backgroundColor: "#60a5fa",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
