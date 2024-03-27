
"use client"
import Web3 from 'web3-eth';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';

function WalletComponent() {

    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        async function fetchWalletDetails() {
          if (typeof window !== 'undefined' && window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                await window.ethereum.enable();
                // Get the current accounts
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                setAddress(accounts[0]);
        
                // Get balance
                const balance = await window.ethereum.request({
                    method: 'eth_getBalance',
                    params: [accounts[0], 'latest'],
                });
                
                setBalance(balance); // Afficher le solde avec 4 décimales
            } catch (error) {
              console.error(error);
            }
          }
        }
    
        fetchWalletDetails();
      }, []);

    return (
        <div>
            <Navbar/>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Porte-monnaie</h1>
                    <div className="border-t border-gray-700 pt-4">
                        <p className="text-lg mb-2"><span className="font-semibold">Adresse :</span> {address}</p>
                        <p className="text-lg"><span className="font-semibold">Solde :</span> {balance} ETH</p>
                    </div>
                <div className='py-4'>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Envoyer</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default WalletComponent;
