function DocumentCard({ doc }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2>{doc.name}</h2>

      <span
        className={`px-3 py-1 rounded text-white
        ${
          doc.status === "Signed"
            ? "bg-green-500"
            : doc.status === "Rejected"
            ? "bg-red-500"
            : "bg-yellow-500"
        }`}
      >
        {doc.status}
      </span>
    </div>
  );
}

export default DocumentCard;