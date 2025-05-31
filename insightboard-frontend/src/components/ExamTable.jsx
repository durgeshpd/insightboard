import { useEffect, useState } from "react";
import api from "../utils/api";

export default function ExamTable() {
  const [exams, setExams] = useState([]);

useEffect(() => {
  api.get("/exams").then(res => {
    setExams(res.data);
  });
}, []);

  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6">
      <h2 className="text-xl font-semibold mb-2">Exams</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">User</th>
            <th className="p-2 text-left">Score</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {exams.map(exam => (
            <tr key={exam.id} className="border-t">
              <td className="p-2">{exam.id}</td>
              <td className="p-2">{exam.name}</td>
              <td className="p-2">{exam.score}</td>
              <td className="p-2">{exam.status}</td>
              <td className="p-2">{new Date(exam.attempted_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
