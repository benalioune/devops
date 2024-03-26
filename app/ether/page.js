
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

        <div className="p-6 max-w-md mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <br></br>

            <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
                Convert Euro to Ether
            </h1>
            <form className="mt-6">
                <div>
                    <label className="block text-gray-700 dark:text-gray-200">
                        Euro Amount
                    </label>
                    <input
                        type="number"
                        value={eurAmount}
                        onChange={(e) => setEurAmount(e.target.value)}
                        className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700 dark:text-gray-200">
                        Ether Amount
                    </label>
                    <input
                        type="text"
                        value={ethAmount}
                        readOnly
                        className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    />
                </div>
                <button
                    type="button"
                    onClick={convertEurToEth}
                    className="w-full px-4 py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Convert
                </button>
                <br></br>
                <br></br>

                <p className="flex justify-center items-center ">
                    <Link href="/crypto">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </button>
                    </Link>
                </p>

            </form>



        </div>


    )
}