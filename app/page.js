import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {/* Navigation */}
      

      {/* Logo */}
      <div className="relative flex items-center mb-16 before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/devops-2.svg"
          alt="DEVOPS Logo"
          width={380}
          height={87}
          priority
        />
      </div>

      {/* Section "C'est quoi DevOps et son utilité" */}
      <section className="max-w-3xl mx-auto mb-12 text-center lg:text-left">
        <h2 className="text-3xl font-semibold mb-4">Qu'est-ce que DevOps et quelle est son utilité ?</h2>
        <p className="text-lg">
          DevOps est une méthodologie visant à unifier le développement logiciel (Dev) et les opérations informatiques (Ops) en favorisant la collaboration et la communication entre les équipes. Son objectif principal est d'automatiser et de rationaliser le processus de développement logiciel pour permettre des déploiements plus rapides, fiables et fréquents.
        </p>
        <p className="text-lg mt-4">
          Les principaux avantages de DevOps incluent une plus grande agilité et flexibilité dans le développement logiciel, des déploiements plus rapides, une meilleure qualité du code, une réduction des coûts et une amélioration de la collaboration entre les équipes. En adoptant DevOps, les organisations peuvent améliorer leur efficacité opérationnelle et offrir des produits logiciels de meilleure qualité à leurs clients.
        </p>
      </section>

        <nav className="max-w-5xl w-full flex justify-between font-mono text-sm mb-8 lg:mb-0">
          <Link href="/crypto">
            <span className="border-b border-gray-300 pb-6 pt-8 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">Crypto Monnaie</span>
          </Link>
          <Link href="/ether">
            <span className="border-b border-gray-300 pb-6 pt-8 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">Conversion</span>
          </Link>
        </nav>
      
    </main>
  );
}
