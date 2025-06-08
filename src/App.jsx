import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authenticate from "./Pages/Authenticate";
import UserDashboard from "./Pages/UserDashboard";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authenticate />} />
        <Route path="/User" element={<UserDashboard />} />
        <Route path="/Admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;