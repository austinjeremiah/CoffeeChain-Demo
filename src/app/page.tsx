import Hyperspeed from './components/Hyperspeed';

export default function Home() {
  return (
    <div className="relative font-sans min-h-screen">
      {/* Hyperspeed Background */}
      <div className="fixed inset-0 -z-10">
        <Hyperspeed effectOptions={{
          distortion: 'xyDistortion',
          colors: {
            roadColor: 0x2C1810,        // Dark coffee brown
            islandColor: 0x1A0F08,      // Very dark coffee
            background: 0x3E2723,       // Rich coffee brown background
            shoulderLines: 0x8B4513,    // Saddle brown
            brokenLines: 0xD2691E,      // Chocolate brown
            leftCars: [0xC17817, 0xD4A574, 0xE6C384],      // Coffee, cream, latte
            rightCars: [0x8B4513, 0xA0522D, 0xCD853F],     // Saddle brown, sienna, peru
            sticks: 0xD4A574,           // Cream color
          }
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="p-6">
          <div className="text-white text-xl font-semibold">CoffeeChain</div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
          {/* NEW Tag */}
          <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm mb-6">
            NEW Hyper-fast payments
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 leading-tight">
            Hyper-fast cross-chain payments
          </h1>

          {/* Description */}
          <p className="text-xl text-white text-center max-w-2xl mb-12 leading-relaxed">
            CoffeeChain enables lightning-fast cross-chain transactions with zero delays. 
            No bridges. No waiting. Just instant, secure payments across any blockchain.
          </p>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
            Get Started
          </button>

          {/* Bottom Text */}
          <p className="text-white text-center mt-16 text-lg">
            Expanding to 70+ Chains and More
          </p>
        </main>
      </div>
    </div>
  );
}
