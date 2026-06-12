import React, { useEffect, useState } from "react";
import axios from "axios";

const Documents = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/docs")
      .then(res => setDocs(res.data));
  }, []);

  return (
    <div>
      <h2>PDF List</h2>
 <div>
      <h1>Documents Page</h1>
    </div>
      {docs.map(doc => (
        <div key={doc._id}>
          📄 {doc.fileName}
          <a
            href={`http://localhost:5000/${doc.filePath}`}
            target="_blank"
          >
            Open
          </a>
        </div>
      ))}
    </div>
  );
};

export default Documents;