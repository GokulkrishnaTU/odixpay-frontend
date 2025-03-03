import React, { useState } from "react";
import TransferFunds from "../component/TransferFunds/TransferFunds";
import TransactionDetails from "../component/TransactionDetails/TransactionDetails";
import TransactionHistory from "../component/TransactionHistory/TransactionHistory";
import "./WalletManager.css"; // Import external CSS

function TransferSection() {
  // State to hold transaction details and history
  const [transactionResult, setTransactionResult] = useState(null);
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState(null);

  // Handler to update transaction result
  const handleTransactionUpdate = (data) => {
    setTransactionResult(data);
  };

  // Handler to update transaction details
  const handleTransactionDetailsUpdate = (data) => {
    setTransactionDetails(data);
  };

  // Handler to update transaction history
  const handleTransactionHistoryUpdate = (data) => {
    setTransactionHistory(data);
  };

  return (
    <div className="wallet-container">
      <h1 className="title">Wallet Manager</h1>
      <div className="wallet-section">
        <div className="card-container">
          {/* Transfer Funds Card */}
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
              <p className="head">Create Wallet</p>
              <p className="discription">Manage your cryptocurrency wallets</p>
              <TransferFunds onTransactionUpdate={handleTransactionUpdate} />
            </div>
          </div>

          {/* Transaction Details Card */}
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
              <TransactionDetails onTransactionUpdate={handleTransactionDetailsUpdate} />
            </div>
          </div>

          {/* Transaction History Card */}
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
              <TransactionHistory onTransactionUpdate={handleTransactionHistoryUpdate} />
            </div>
          </div>
        </div>
      </div>

      {/* Display Transaction Information */}
      <div className="transaction-info">
        {transactionResult && <p><strong>Transaction Result:</strong> {JSON.stringify(transactionResult)}</p>}
        {transactionDetails && <p><strong>Transaction Details:</strong> {JSON.stringify(transactionDetails, null, 2)}</p>}
        {transactionHistory && <p><strong>Transaction History:</strong> {JSON.stringify(transactionHistory, null, 2)}</p>}
      </div>
    </div>
  );
}

export default TransferSection;
