import Link from 'next/link';
import Image from 'next/image'; // Import de Image depuis Next.js

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <Link href="/">
                                <span href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Accueil</span>
                            </Link>
                            <Link href="/crypto">
                                <span href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Crypto Monnaie</span>
                            </Link>
                            <Link href="/ether">
                                <span href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Conversion</span>
                            </Link>
                            <Link href="/wallet">
                                <span href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Wallet</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
};

