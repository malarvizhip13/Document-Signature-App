import './App.css'
import Documents from "./pages/Document";
import PublicSign from "./pages/PublicSign";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
     <>
     
    <Routes>
      <Route path="/" element={<Documents />} />
      <Route path="/sign/:token" element={<PublicSign />} />
    </Routes>
     </>
  );
}

export default App;