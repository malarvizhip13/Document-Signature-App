import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Documents = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/docs")
      .then(res => setDocs(res.data));
  }, []);
const [position, setPosition] = useState({
  x: 100,
  y: 100,
});

const [file, setFile] = useState(null);
const [selectedDoc, setSelectedDoc] = useState(null);
console.log("DOCS:", docs);
console.log("SELECTED DOC:", selectedDoc);


const handleFileChange = (e) => {
  setFile(e.target.files[0]);
};
const uploadPDF = async () => {
  const formData = new FormData();
  formData.append("pdf", file);

  await axios.post("http://localhost:5000/api/docs/upload", formData);

  alert("Uploaded Successfully");

  const res = await axios.get("http://localhost:5000/api/docs");
  setDocs(res.data);
};
const saveSignature = async () => {
  await fetch("http://localhost:5000/api/signatures", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      
  fileId: selectedDoc,
  signer: "user1",
  x: position.x,
  y: position.y,
}),
  });

  alert("Saved");
};

const handleDrag = (e) => {
   const rect = e.currentTarget.parentNode.getBoundingClientRect();

  setPosition({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  });
};
 return (
  <div style={{ position: "relative", minHeight: "500px" }}>

    <input type="file" accept="application/pdf" onChange={handleFileChange} />

<button onClick={uploadPDF}>
  Upload PDF
</button>

    <h2>PDF List</h2>

    <h1>Documents Page</h1>
<p>Selected Doc: {selectedDoc}</p>
   {docs.map((doc) => (
  <div
    key={doc._id}
    onClick={() => {
      console.log("CLICKED DOC:", doc._id);
      setSelectedDoc(doc._id);
    }}
    style={{ cursor: "pointer", marginBottom: "10px" }}
  >
         {doc.fileName}

        <Link
  to="/dashboard"
  style={{ marginLeft: "10px", color: "blue" }}
>
  Open
</Link>

      </div>
    ))}

    <div
      draggable
      onDragEnd={handleDrag}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        background: "yellow",
        padding: "10px",
        border: "1px solid black",
        cursor: "move",
      }}
    >
      Signature
    </div>

<button onClick={saveSignature}>
  Save Signature Position
</button>
    

  </div>
);
   
};

export default Documents;