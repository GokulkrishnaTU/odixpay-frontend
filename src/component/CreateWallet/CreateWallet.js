import axios from "axios";
import "./CreateWallet.css";

const CreateWallet = ({ onWalletCreate }) => {
  // If you no longer need to store wallet state locally, you can remove this line
  // const [wallet, setWallet] = useState(null);



  const handleCreateWallet = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/create_wallet`);
      onWalletCreate(response.data); // Pass data to parent component
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
