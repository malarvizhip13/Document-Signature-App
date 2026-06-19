import { useEffect, useState } from "react";
import DocumentCard from "../components/DocumentCard";
import axios from "axios";


function Dashboard() {
  const [filter, setFilter] = useState("All");

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/status/file123");
      setDocuments(res.data ? [res.data] : []);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);

  const filteredDocs =
    filter === "All"
      ? documents
      : documents.filter(
          (doc) => doc.status === filter
        );

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
  <h1 className="text-3xl font-bold">
    Signature Dashboard
  </h1>

  <select
    className="border p-2 rounded mt-3 md:mt-0"
    value={filter}
    onChange={(e) =>
      setFilter(e.target.value)
    }
  >
    <option>All</option>
    <option>Pending</option>
    <option>Signed</option>
    <option>Rejected</option>
  </select>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
       
       {filteredDocs.map((doc) => (
  <DocumentCard
    key={doc.id}
    doc={doc}
  />
))}
      </div>
    </div>
  );
}

export default Dashboard;