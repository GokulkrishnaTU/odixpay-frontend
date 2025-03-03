import React, { useState } from "react";
import axios from "axios";
import "./TransferFunds.css";

const TransferFunds = ({ onTransactionUpdate }) => {
  const [privateKey, setPrivateKey] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [result, setResult] = useState(null);

  const handleTransfer = async () => {
    try {
      const response = await axios.post("http://localhost:5000/transfer", {
        privateKey,
        recipientAddress,
        amount,
        tokenAddress,
      });

      setResult(response.data);
      if (onTransactionUpdate) {
        onTransactionUpdate(response.data); // Send data to parent
      }
    } catch (error) {
      console.error("Error transferring funds:", error);
    }
  };

  return (
    <div className="Container">
      <h2>Transfer Funds</h2>
      <input
        type="text"
        placeholder="Enter Private Key"
        value={privateKey}
        onChange={(e) => setPrivateKey(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Recipient Address"
        value={recipientAddress}
        onChange={(e) => setRecipientAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Token Address (optional)"
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>
      {result && <p>Transaction Hash: {result.hash}</p>}
    </div>
  );
};

export default TransferFunds;
