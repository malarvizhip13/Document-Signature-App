import Draggable from "react-draggable";

function SignatureField({ onDragStop }) {
  return (
    <Draggable onStop={onDragStop}>
      <div
        style={{
          width: "150px",
          height: "50px",
          border: "2px dashed blue",
          background: "#f5f5f5",
          position: "absolute",
          cursor: "move",
          textAlign: "center",
          lineHeight: "50px"
        }}
      >
        Sign Here
      </div>
    </Draggable>
  );
}

export default SignatureField;