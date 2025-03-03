import axios from 'axios';

const infuraKey = process.env.REACT_APP_INFURA_API_KEY;
const alchemyKey = process.env.REACT_APP_ALCHEMY_API_KEY;

export const getBlockNumber = async () => {
    try {
        const response = await axios.post(`https://mainnet.infura.io/v3/${infuraKey}`, {
            jsonrpc: "2.0",
            id: 1,
            method: "eth_blockNumber",
            params: []
        });
        return parseInt(response.data.result, 16);
    } catch (error) {
        console.error("Infura API Error:", error);
        return null;
    }
};

export const getLatestBlock = async () => {
    try {
        const response = await axios.get(`https://eth-mainnet.alchemyapi.io/v2/${alchemyKey}`);
        return response.data;
    } catch (error) {
        console.error("Alchemy API Error:", error);
        return null;
    }
};
