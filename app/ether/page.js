
"use client"

import Link from 'next/link'

import { useState, useEffect } from 'react'


async function getData() {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default function Home() {
    const [eurAmount, setEurAmount] = useState(0)
    const [ethAmount, setEthAmount] = useState(0)
    const [ethPrice, setEthPrice] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const data = await getData()
            setEthPrice(data.ethereum.eur)
        }

        fetchData()
    }, [])

    function convertEurToEth() {
        setEthAmount((eurAmount / ethPrice).toFixed(4))
    }

    return (
            <div className="flex items-center justify-center min-h-screen bg-dark-200">
                <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
                        Convert Euro to Ether
                    </h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-200">Montant en euro</label>
                            <input
                                type="number"
                                value={eurAmount}
                                onChange={(e) => setEurAmount(e.target.value)}
                                className="w-full px-3 py-2 mt-1 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-200">Montant en ether</label>
                            <input
                                type="text"
                                value={ethAmount}
                                readOnly
                                className="w-full px-3 py-2 mt-1 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={convertEurToEth}
                            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Convert
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-gray-700 dark:text-gray-300">
                            Go to{' '}
                            <Link href="/crypto">
                                <span className="text-blue-500 hover:text-blue-700">Crypto Page</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }