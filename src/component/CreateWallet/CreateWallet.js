// import React, { useState } from "react";
// import axios from "axios";
// import "./CreateWallet.css"


// const CreateWallet = () => {
//   const [wallet, setWallet] = useState(null);

//   const handleCreateWallet = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/create_wallet");
//       console.log('response: ', response.data);
//       setWallet(response.data);
//     } catch (error) {
//       console.error("Error creating wallet:", error);
//     }
//   };

//   return (
//     <div className="Container">
//       <h2>Create Wallet</h2>
//       <button onClick={handleCreateWallet}>Create New Wallet</button>
//       {wallet && (
//         <div className="wallet-detials">
//           <p>Mnemonic: {wallet.words}</p>
//           <p>Address: {wallet.address}</p>
//           <p>Private Key: {wallet.private_key}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateWallet;

import React, { useState } from "react";
import axios from "axios";
import "./CreateWallet.css";

const CreateWallet = ({ onWalletCreate }) => {
  const [wallet, setWallet] = useState(null);

  const handleCreateWallet = async () => {
    try {
      const response = await axios.post("http://localhost:5000/create_wallet");
      setWallet(response.data);
      onWalletCreate(response.data); // Pass data to parent
    } catch (error) {
      console.error("Error creating wallet:", error);
    }
  };

  return (
    <div className="Container">
      <h2>Create Wallet</h2>
      <button onClick={handleCreateWallet}>Create New Wallet</button>
    </div>
  );
};


export default CreateWallet;
