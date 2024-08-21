import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [active, setActive] = useState(false);

  if (active) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Navbar setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Sidebar setActive={setActive} active={active} />
        {active && (
          <div className="bg-black bg-opacity-50 w-full h-full fixed top-0 right-0"></div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
