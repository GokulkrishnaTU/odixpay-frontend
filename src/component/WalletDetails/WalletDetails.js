import React, { useState } from "react";
import axios from "axios";
import "./WalletDetails.css";

const WalletDetails = ({ onWalletDetails }) => {
  const [mnemonic, setMnemonic] = useState("");

  const handleGetDetails = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/wallet_detail`, { words: mnemonic });
      onWalletDetails(response.data); // Pass data to parent
    } catch (error) {
      console.error("Error fetching wallet details:", error);
    }
  };

  return (
    <div className="Container">
      <h2>Wallet Details</h2>
      <input
        type="text"
        placeholder="Enter Mnemonic"
        value={mnemonic}
        onChange={(e) => setMnemonic(e.target.value)}
      />
      <button onClick={handleGetDetails}>Get Wallet Details</button>
    </div>
  );
};

export default WalletDetails;
