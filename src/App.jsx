import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route
        path="/"
        element={
          <div>
            <Navbar/>
          </div>
        }
        />

      </Routes>
    </Router>
  );
}

export default App;
