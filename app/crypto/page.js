import Link from 'next/link';
import Navbar from '../Navbar';
async function getData() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    const data = await getData()

    return (
        <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-between min-h-screen">
                <h1 className="text-3xl font-bold text-center mt-8 mb-4">Top 10 des meilleurs cryptos</h1>
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full sm:w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th className="px-3 sm:px-6 py-3 text-xs sm:text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Rank</th>
                                <th className="px-3 sm:px-6 py-3 text-xs sm:text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Name</th>
                                <th className="px-3 sm:px-6 py-3 text-xs sm:text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Symbol</th>
                                <th className="px-3 sm:px-6 py-3 text-xs sm:text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Price in USD</th>
                                <th className="px-3 sm:px-6 py-3 text-xs sm:text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Last updated</th>
                                <th className="px-3 sm:px-6 py-3 text-xs sm:text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Market Cap</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {data.map((coin, index) => (
                                <tr key={coin.id} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'}>
                                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">{coin.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap"><span className="text-sm text-gray-900 dark:text-white">{coin.symbol}</span></td>
                                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap"><span className="text-sm text-gray-900 dark:text-white">{coin.current_price}</span></td>
                                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap"><span className="text-sm text-gray-900 dark:text-white">{coin.last_updated}</span></td>
                                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap"><span className="text-sm text-gray-900 dark:text-white">{coin.market_cap}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
