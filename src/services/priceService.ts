import axios from 'axios';

const COINCAP_API_KEY = '78f89b60-4a10-4317-8c9d-0961048ea56e';
const BASE_URL = 'https://api.coincap.io/v2';

interface PriceData {
  priceUsd: string;
  time: number;
}

export const getXMRPrice = async (): Promise<number> => {
  try {
    const response = await axios.get(`${BASE_URL}/assets/monero`, {
      headers: {
        'Authorization': `Bearer ${COINCAP_API_KEY}`
      }
    });
    return parseFloat(response.data.data.priceUsd);
  } catch (error) {
    console.error('Error fetching XMR price:', error);
    throw error;
  }
};

export const subscribeToXMRPrice = (callback: (price: number) => void) => {
  const ws = new WebSocket('wss://ws.coincap.io/prices?assets=monero');

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.monero) {
      callback(parseFloat(data.monero));
    }
  };

  return () => ws.close();
};