import React, { useState } from "react";
import axios from "axios";
import "./TokenAddress.css"


const TokenAddress = () => {
  const [token, setToken] = useState("");
  const [address, setAddress] = useState(null);

  const getTokenAddress = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/get_token_address/${token}`);
      setAddress(response.data.address);
    } catch (error) {
      console.error("Error fetching token address:", error);
    }
  };

  return (
    <div className="Container">
      <h2>Get Token Address</h2>
      <input type="text" placeholder="Token Name" value={token} onChange={(e) => setToken(e.target.value)} />
      <button onClick={getTokenAddress}>Get Address</button>
      {address && <p>Token Address: {address}</p>}
    </div>
  );
};

export default TokenAddress;
