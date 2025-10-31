import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Support from "./pages/Support";
import Community from "./pages/Community";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/src/pages/Home.jsx" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/community" element={<Community />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
