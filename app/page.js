export default function MWCHomepage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/10">
        <div className="text-2xl tracking-[0.35em] font-light">MWC.</div>
        <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-white/70">
          <a href="#">New Drop</a>
          <a href="#">Polos</a>
          <a href="#">Oversized</a>
          <a href="#">About</a>
        </div>
        <button className="border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300">
          Shop Now
        </button>
      </nav>

      {/* Hero */}
      <section className="grid md:grid-cols-2 items-center px-8 md:px-16 py-20 md:py-28 gap-12">
        <div>
          <p className="uppercase tracking-[0.4em] text-white/40 text-xs mb-5">
            Est. 2026
          </p>

          <h1 className="text-5xl md:text-7xl leading-tight font-light tracking-tight">
            Quiet Luxury
            <br />
            <span className="italic text-white/70">Built for the Coast.</span>
          </h1>

          <p className="mt-8 text-white/60 max-w-lg leading-8 text-lg">
            Minimal fashion inspired by silence, heatwaves, midnight drives,
            and modern South Indian culture.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-white text-black px-7 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300">
              Explore Collection
            </button>
            <button className="border border-white/20 px-7 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              View Lookbook
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent blur-3xl rounded-full"></div>

          <div className="relative bg-[#111111] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1400&auto=format&fit=crop"
              alt="MWC Fashion"
              className="w-full h-[650px] object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                    New Arrival
                  </p>
                  <h3 className="text-3xl mt-2 font-light">MWC. Signature Polo</h3>
                </div>

                <div className="text-right">
                  <p className="text-white/50 text-sm">Starting at</p>
                  <p className="text-2xl">₹1499</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="px-8 md:px-16 py-10 border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap gap-16 text-white/30 uppercase tracking-[0.4em] text-sm">
          <span>Quiet Moves.</span>
          <span>Built Slowly.</span>
          <span>Less Noise.</span>
          <span>Grace Over Ego.</span>
          <span>Quiet Moves.</span>
          <span>Built Slowly.</span>
        </div>
      </section>

      {/* Collections */}
      <section className="px-8 md:px-16 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="uppercase tracking-[0.3em] text-white/40 text-xs mb-3">
              Collections
            </p>
            <h2 className="text-4xl md:text-5xl font-light">Designed to Feel Premium.</h2>
          </div>

          <button className="hidden md:block border border-white/15 px-5 py-2 rounded-full text-sm">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Signature Polos',
              image:
                'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Oversized Essentials',
              image:
                'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Quiet Summer Drop',
              image:
                'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[500px] w-full object-cover group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 p-7">
                <h3 className="text-3xl font-light">{item.title}</h3>
                <button className="mt-5 text-sm uppercase tracking-[0.25em] text-white/70">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-8 md:px-16 py-24 bg-[#0F0F0F] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-white/40 text-xs mb-6">
            Philosophy
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight font-light">
            Fashion that doesn't
            <br />
            need to scream.
          </h2>

          <p className="mt-8 text-white/60 leading-8 text-lg max-w-2xl mx-auto">
            MWC. is built around calm confidence — clean silhouettes,
            premium textures, and timeless statements inspired by modern
            South India.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-10 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-white/50 text-sm">
        <div>
          <div className="text-2xl tracking-[0.35em] text-white mb-3">MWC.</div>
          <p>Wear Culture Community</p>
        </div>

        <div className="flex gap-8 uppercase tracking-[0.2em]">
          <a href="#">Instagram</a>
          <a href="#">Lookbook</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}
