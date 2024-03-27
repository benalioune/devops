"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image'; // Import de Image depuis Next.js

export default function Navbar() {
const pathname = usePathname()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <Link href="/">
                    <span href="#" className={`link ${pathname === '/' ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium ' : 'text-white rounded-md px-3 py-2 text-sm font-medium '}`}>Accueil</span>
                </Link>
                <Link href="/crypto">
                    <span href="#" className={`link ${pathname === '/crypto' ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium ' : 'text-white rounded-md px-3 py-2 text-sm font-medium '}`}>Crypto Monnaie</span>
                </Link>
                <Link href="/ether">
                    <span href="#" className={`link ${pathname === '/ether' ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium ' : 'text-white rounded-md px-3 py-2 text-sm font-medium '}`}>Conversion</span>
                </Link>
                <Link href="/wallet">
                    <span href="#" className={`link ${pathname === '/wallet' ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium ' : 'text-white rounded-md px-3 py-2 text-sm font-medium '}`}>Wallet</span>
                </Link>
            </div>
        </div>
    </nav>
  );
};

