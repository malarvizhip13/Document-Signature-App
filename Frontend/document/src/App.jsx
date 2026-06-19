import './App.css'
import Documents from "./pages/Document";
import PublicSign from "./pages/PublicSign";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
     <>
     
    <Routes>
      <Route path="/" element={<Documents />} />
      <Route path="/sign/:token" element={<PublicSign />} />
    
    <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
     </>
  );
}

export default App;