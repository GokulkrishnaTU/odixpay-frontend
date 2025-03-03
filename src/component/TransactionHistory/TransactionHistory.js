import React, { useState } from "react";
import axios from "axios";
import "./TransactionHistory.css";

const TransactionHistory = ({ onHistoryUpdate }) => {
  const [address, setAddress] = useState("");
  const [history, setHistory] = useState(null);

  const handleGetHistory = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/transaction_history`,
 {
        params: { address } // Send address as query parameter
      });
      setHistory(response.data);
      if (onHistoryUpdate) {
        onHistoryUpdate(response.data); // Send data to parent
      }
    } catch (error) {
      console.error("Error fetching transaction history:", error);
    }
  };

  return (
    <div className="Container">
      <h2>Transaction History</h2>
      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleGetHistory}>Get History</button>
      {history && <pre>{JSON.stringify(history, null, 2)}</pre>}
    </div>
  );
};

export default TransactionHistory;
