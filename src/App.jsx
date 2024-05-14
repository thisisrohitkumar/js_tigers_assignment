import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import Analytics from "./pages/analytics/Analytics"
import "./App.css"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </>
  )
}

export default App