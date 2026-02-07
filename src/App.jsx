import SmoothScroll from "./components/SmoothScroll";
import ScrollVideo from "./components/ScrollVideo";
import Navbar from "./components/Navbar";
import Section, { FadeIn } from "./components/Section";
import MagneticButton from "./components/MagneticButton";
import ScrollIndicator from "./components/ScrollIndicator";
import SnakeBorder from "./components/SnakeBorder";
import { useRef } from "react";

export default function App() {
  return (
    <SmoothScroll>
      <ScrollVideo />
      <ScrollIndicator />
      <Navbar />

      {/* Hero */}
      <div id="hero" className="relative h-screen flex items-center justify-center text-center">
        <Section className="min-h-0">
          <FadeIn>
            <h1 className="text-6xl md:text-9xl font-serif text-mist mb-6 drop-shadow-lg">The Peak of Silence</h1>
            <p className="text-xl md:text-2xl font-sans text-mist/80 tracking-widest uppercase mb-10">A sanctuary carved from the clouds</p>
            <div className="flex justify-center">
              <div className="w-[1px] h-24 bg-gradient-to-b from-gold to-transparent animate-pulse"></div>
            </div>
          </FadeIn>
        </Section>
      </div>

      {/* Spacer to allow some scrolling before next section */}
      <div className="h-[20vh]"></div>

      {/* Narrative */}
      <Section id="story" className="text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {(() => {
            const storyRef = useRef(null);
            return (
              <FadeIn ref={storyRef} className="relative p-10 bg-forest/30 backdrop-blur-md border border-white/5 rounded-2xl shadow-xl overflow-hidden group">
                <SnakeBorder targetRef={storyRef} />
                <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6 relative z-10">Breathable Architecture</h2>
                <p className="text-mist/80 leading-relaxed font-sans text-lg relative z-10">
                  Experience living spaces that merge with the ridge. Every angle is designed to frame the eternal dance of mist and stone.
                  Where the boundary between shelter and sky dissolves.
                </p>
              </FadeIn>
            );
          })()}
          <div></div>
        </div>
      </Section>

      <div className="h-[30vh]"></div>

      {/* Parallax Stats */}
      <Section id="amenities" className="text-center relative">
        <div className="absolute inset-0 bg-forest/30 backdrop-blur-sm -z-10 rounded-3xl mx-4 md:mx-20 my-10"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 py-12">
          {[
            { label: "Altitude", value: "4000m" },
            { label: "Private Trails", value: "12" },
            { label: "Carbon Footprint", value: "0%" },
            { label: "Stars Visible", value: "∞" },
          ].map((stat, i) => (
            <FadeIn key={i} className="flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
              <div className="text-5xl md:text-7xl font-serif text-gold mb-2 drop-shadow-md">{stat.value}</div>
              <div className="w-12 h-[1px] bg-gold/50 my-4"></div>
              <div className="text-sm uppercase tracking-widest text-mist font-bold shadow-black drop-shadow-md">{stat.label}</div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <div className="h-[30vh]"></div>

      {/* Middle Bridge */}
      <Section className="items-center text-center">
        <FadeIn>
          <blockquote className="text-3xl md:text-6xl font-serif italic text-mist leading-tight max-w-4xl">
            "Nature is not a place to visit. It is home."
          </blockquote>
        </FadeIn>
      </Section>

      <div className="h-[30vh]"></div>

      {/* Waterfall Feature - Right Aligned */}
      <Section className="items-end text-right">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div></div>
          <FadeIn className="relative p-10 text-right bg-gradient-to-l from-forest/80 to-forest/40 backdrop-blur-md rounded-xl overflow-hidden group">
            {/* Waterfall Border Effect */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-shimmer opacity-80"></div>
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-blue-400 via-transparent to-transparent opacity-50"></div>

            <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6 relative z-10">Pure Hydration</h2>
            <p className="text-mist/90 leading-relaxed font-sans mb-8 text-lg relative z-10 drop-shadow-sm">
              Our spa is powered by the natural rhythm of the falls.
              Mineral-rich waters flow directly from the glacial source, offering a timeless rejuvenation.
            </p>
            <div className="flex justify-end relative z-10">
              <MagneticButton className="border border-gold text-gold hover:bg-gold hover:text-forest">
                Explore Spa
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </Section>

      <div className="h-[30vh]"></div>

      {/* Gallery - Horizontal Scroll */}
      <Section id="gallery">
        <FadeIn>
          <h2 className="text-4xl font-serif text-mist mb-12 text-center">Interiors</h2>
          {/* Simple horizontal scroll area */}
          <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar px-4">
            {[
              { title: "Minimalist Bedroom", img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=600&auto=format&fit=crop" },
              { title: "Stone Bath", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop" },
              { title: "Panoramic Lounge", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop" },
              { title: "Infinity Deck", img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=600&auto=format&fit=crop" },
              { title: "Forest Study", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop" }
            ].map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[400px] h-[500px] relative rounded-2xl overflow-hidden snap-center group hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold font-serif text-2xl block mb-2">{item.title}</span>
                  <div className="w-12 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <div className="h-[20vh]"></div>

      {/* Footer - Water/Gold Card */}
      <footer className="relative py-32 flex justify-center items-center p-4">
        <Section className="min-h-0 w-full max-w-4xl mx-auto">
          <FadeIn>
            {/* Card Container */}
            <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#0a2f23] to-[#061612] p-12 md:p-20 text-center border-[3px] border-gold/70 shadow-[0_0_50px_-10px_rgba(197,160,89,0.3)] overflow-hidden">

              {/* Water Flow Effect Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-200/50 shadow-[0_0_20px_5px_rgba(186,230,253,0.5)]"></div>
              {/* Simulated Water Splash/Turbulence */}
              <div className="absolute -top-4 -left-4 -right-4 h-8 bg-gradient-to-b from-white/20 to-transparent blur-md animate-pulse"></div>

              {/* Drips */}
              <div className="absolute top-0 left-10 w-[2px] bg-blue-200/60 animate-drip"></div>
              <div className="absolute top-0 right-10 w-[2px] bg-blue-200/60 animate-drip" style={{ animationDelay: "1.5s" }}></div>
              <div className="absolute top-0 left-1/4 w-[2px] bg-blue-200/40 animate-drip" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute top-0 right-1/4 w-[2px] bg-blue-200/40 animate-drip" style={{ animationDelay: "2s" }}></div>

              {/* Content */}
              <h3 className="text-gold/80 font-serif text-lg tracking-widest uppercase mb-4">Aetheria Woods</h3>
              <h2 className="text-5xl md:text-7xl font-serif text-mist mb-8 drop-shadow-lg leading-tight">Escape Reality</h2>

              <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12 relative z-10">
                <MagneticButton className="px-12 py-5 text-xl bg-transparent border border-gold text-gold hover:bg-gold hover:text-forest transition-all shadow-[0_0_15px_rgba(197,160,89,0.2)]">
                  Reserve Your Escape
                </MagneticButton>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-mist/40 font-sans tracking-widest gap-4">
                <span>© 2026 AETHERIA WOODS</span>
                <a href="#" className="hover:text-gold transition-colors">CONTACT US</a>
              </div>
            </div>
          </FadeIn>
        </Section>
      </footer>
    </SmoothScroll>
  );
}
