


import React, { useState } from "react";
import CreateWallet from "../component/CreateWallet/CreateWallet";
import WalletDetails from "../component/WalletDetails/WalletDetails";
import BalanceChecker from "../component/BalanceChecker/BalanceChecker";
import "./section.css"; // Import external CSS

function WalletManager() {

    const [wallet, setWallet] = useState(null); 
    const [mnemonic, setMnemonic] = useState(""); // Store Mnemonic
    const [balance, setBalance] = useState(null);


      // Function to update wallet details when a new wallet is created
  const handleWalletCreate = (newWallet) => {
    setWallet(newWallet);
    setMnemonic(newWallet.words); // Store mnemonic
  };

  // Function to update wallet details from WalletDetails component
  const handleWalletDetails = (walletData) => {
    setWallet(walletData);
  };

  // Function to update balance from BalanceChecker component
  const handleBalanceUpdate = (balanceData) => {
    setBalance(balanceData);
  };


  return (
    <div className="wallet-container">
      <h1 className="title">Wallet Manager</h1>

      
      {wallet && (
        <div className="wallet-details">
          <h2>Wallet Details</h2>
          <p><strong>Mnemonic:</strong> {mnemonic}</p>
          <p><strong>Address:</strong> {wallet.address}</p>
          <p><strong>Private Key:</strong> {wallet.private_key}</p>
        </div>
      )}

      {/* Show Balance Details in Parent Component */}
      {balance && (
        <div className="balance-details">
          <h2>Balance Details</h2>
          <p><strong>ETH Balance:</strong> {balance.ETH}</p>
          <p><strong>ERC20 Balance:</strong> {balance.ERC20}</p>
        </div>
      )}
      <div className="wallet-section">
        <div className="card-container">
          <div className="card">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 784.37 1277.39"
              clipRule="evenodd"
              fillRule="evenodd"
              imageRendering="optimizeQuality"
              textRendering="geometricPrecision"
              shapeRendering="geometricPrecision"
              version="1.1"
              height="100%"
              width="100%"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              className="img"
            >
              <g id="Layer_x0020_1">
                <g id="_1421394342400">
                  <g>
                    <polygon points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" fill="#343434"></polygon>
                    <polygon points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" fill="#8C8C8C"></polygon>
                    <polygon points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" fill="#3C3C3B"></polygon>
                    <polygon points="392.07,1277.38 392.07,956.52 -0,724.89" fill="#8C8C8C"></polygon>
                    <polygon points="392.07,882.29 784.13,650.54 392.07,472.33" fill="#141414"></polygon>
                    <polygon points="0,650.54 392.07,882.29 392.07,472.33" fill="#393939"></polygon>
                  </g>
                </g>
              </g>
            </svg>
            <div className="textBox">
              <p className="head">Create Wallet</p>
              <p className="discription">Manage your cryptocurrency wallets</p>
              <CreateWallet onWalletCreate={handleWalletCreate} />
              </div>
          </div>

          <div className="card">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 784.37 1277.39"
              clipRule="evenodd"
              fillRule="evenodd"
              imageRendering="optimizeQuality"
              textRendering="geometricPrecision"
              shapeRendering="geometricPrecision"
              version="1.1"
              height="100%"
              width="100%"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              className="img"
            >
              <g id="Layer_x0020_1">
                <g id="_1421394342400">
                  <g>
                    <polygon points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" fill="#343434"></polygon>
                    <polygon points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" fill="#8C8C8C"></polygon>
                  </g>
                </g>
              </g>
            </svg>
            <div className="textBox">
              <p className="head">Wallet Details</p>
              <p className="discription">View and manage wallet details</p>
              <WalletDetails onWalletDetails={handleWalletDetails} />
              </div>
          </div>

          <div className="card">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 784.37 1277.39"
              clipRule="evenodd"
              fillRule="evenodd"
              imageRendering="optimizeQuality"
              textRendering="geometricPrecision"
              shapeRendering="geometricPrecision"
              version="1.1"
              height="100%"
              width="100%"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              className="img"
            >
              <g id="Layer_x0020_1">
                <g id="_1421394342400">
                  <g>
                    <polygon points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" fill="#343434"></polygon>
                    <polygon points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" fill="#8C8C8C"></polygon>
                  </g>
                </g>
              </g>
            </svg>
            <div className="textBox">
              <p className="head">Balance Checker</p>
              <p className="discription">Check your wallet balance</p>
              <BalanceChecker onBalanceUpdate={handleBalanceUpdate} />
              </div>
          </div>
        </div>
      </div>




      </div>
  );
}

export default WalletManager;





