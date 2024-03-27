import Image from "next/image";
import Link from 'next/link';
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="">
      {/* Navigation */}
      <Navbar/>
      
      <div className="flex flex-col items-center justify-between min-h-screen p-24">

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
      <section className="max-w-3xl mx-auto mb-12 text-center lg:text-left text-justify">
        <h2 className="text-3xl font-semibold mb-4">Qu&apos;est-ce que DevOps et quelle est son utilité ?</h2>
        <p className="text-lg">
          DevOps est une méthodologie visant à unifier le développement logiciel (Dev) et les opérations informatiques (Ops) en favorisant la collaboration et la communication entre les équipes. Son objectif principal est d&apos;automatiser et de rationaliser le processus de développement logiciel pour permettre des déploiements plus rapides, fiables et fréquents.
        </p>
        <p className="text-lg mt-4">
          Les principaux avantages de DevOps incluent une plus grande agilité et flexibilité dans le développement logiciel, des déploiements plus rapides, une meilleure qualité du code, une réduction des coûts et une amélioration de la collaboration entre les équipes. En adoptant DevOps, les organisations peuvent améliorer leur efficacité opérationnelle et offrir des produits logiciels de meilleure qualité à leurs clients.
        </p>
      </section>
      </div>
    </main>
  );
}
