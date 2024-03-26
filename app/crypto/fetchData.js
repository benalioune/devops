import axios from 'axios';

export async function getCryptoData() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        return response.data;
    } catch (error) {
        console.error('Error fetching crypto data:', error);
        throw error;
    }
}

<div>
    {Object.entries(data).map(([key, value]) => (
        <div key={key}>
            <h2 className="text-3xl font-bold underline">{key}</h2>
            <p>Price in USD: {value.current_price}</p>
            <p>Name: {value.name}</p>
        </div>
    ))}
</div>