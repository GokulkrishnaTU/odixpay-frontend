import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import WalletManager from "./page/WalletManager";
import TransferSection from "./page/TransferSection";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-container">
        <nav>
          <ul>
            <li><Link to="/wallet-manager">Wallet Manager</Link></li>
            <li><Link to="/transfer">Transfer Section</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Redirect "/" to "/wallet-manager" initially */}
          <Route path="/" element={<Navigate to="/wallet-manager" />} />
          
          {/* Wallet Manager Page */}
          <Route path="/wallet-manager" element={<WalletManager />} />
          
          {/* Transfer Section Page */}
          <Route path="/transfer" element={<TransferSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
