import React, { useState } from "react";
import axios from "axios";
import "./BalanceChecker.css"
const BalanceChecker = ({ onBalanceUpdate }) => {
  const [address, setAddress] = useState("");
  const [tokenName, setTokenName] = useState("");

  const handleGetBalance = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/get_balance/${address}`, {
        params: { tokenName }
      });
      onBalanceUpdate(response.data); // Pass data to parent
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div className="Container">
      <h2>Check Balance</h2>
      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Token Name (optional)"
        value={tokenName}
        onChange={(e) => setTokenName(e.target.value)}
      />
      <button onClick={handleGetBalance}>Get Balance</button>
    </div>
  );
};

export default BalanceChecker;