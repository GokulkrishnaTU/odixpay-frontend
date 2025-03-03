import React, { useState } from "react";
import axios from "axios";
import "./TransactionDetails.css";

const TransactionDetails = ({ onTransactionUpdate }) => {
  const [txid, setTxid] = useState("");
  const [details, setDetails] = useState(null);

  const handleGetDetails = async () => {
    try {
      const response = await axios.post("http://localhost:5000/transaction_details", { txid });
      setDetails(response.data);
      if (onTransactionUpdate) {
        onTransactionUpdate(response.data); // Send data to parent
      }
    } catch (error) {
      console.error("Error fetching transaction details:", error);
    }
  };

  return (
    <div className="Container">
      <h2>Transaction Details</h2>
      <input
        type="text"
        placeholder="Enter Transaction ID"
        value={txid}
        onChange={(e) => setTxid(e.target.value)}
      />
      <button onClick={handleGetDetails}>Get Details</button>
      {details && <pre>{JSON.stringify(details, null, 2)}</pre>}
    </div>
  );
};

export default TransactionDetails;
