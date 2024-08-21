import { useState } from "react";
import "./input.css";
import "./index.css";
import "./App.css";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoardHeader from "./components/ui/nav/dashboardHeader";
import Suggestion from "./pages/suggestion";
import InvestMent from "./pages/investments";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DashBoardHeader />
      <Router>
        <Routes>
          <Route element={<Suggestion />} path="/suggestions" />
          <Route element={<Dashboard />} path="/" />
          <Route element={<InvestMent />} path="/investments" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
