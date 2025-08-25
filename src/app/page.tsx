import { RainbowButton } from '@/components/magicui/rainbow-button';

export default function Home() {
  return (
    <div className="relative font-sans min-h-screen bg-[#FDF6E3]">
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="p-6">
          <div className="text-black text-xl font-semibold">CoffeeChain</div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
          {/* Hero Text */}
          <h1 className="text-5xl md:text-6xl font-bold text-black text-center mb-6 leading-tight">
            Hyper-fast cross-chain payments
          </h1>

          {/* Description */}
          <p className="text-xl text-black text-center max-w-2xl mb-12 leading-relaxed">
            CoffeeChain enables lightning-fast cross-chain transactions with zero delays. 
            No bridges. No waiting. Just instant, secure payments across any blockchain.
          </p>

          {/* CTA Button */}
          <RainbowButton size="lg" className="text-lg font-semibold px-8 py-4">
            Get Started
          </RainbowButton>

          {/* Bottom Text */}
          <p className="text-black text-center mt-16 text-lg">
            Expanding to 70+ Chains and More
          </p>
        </main>
      </div>
    </div>
  );
}
