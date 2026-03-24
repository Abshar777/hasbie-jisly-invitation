import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Countdown } from "./components/Countdown";
import { Preloader } from "./components/Preloader";
import { Calendar, MapPin, Clock, Heart, Music, Sparkles } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const weddingDate = new Date("2026-04-09T12:00:00");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gold-light selection:bg-gold selection:text-white">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      <main className="relative max-w-4xl mx-auto px-4 py-12 md:py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-maroon rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold rounded-full blur-[120px]" />
        </div>

        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="relative luxury-card shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[1.5rem] sm:rounded-[2rem] border-4 sm:border-8 border-double border-gold/30 p-6 sm:p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 sm:w-32 sm:h-32 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-gold/40 rounded-tl-2xl sm:rounded-tl-3xl m-2 sm:m-4" />
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-gold/40 rounded-tr-2xl sm:rounded-tr-3xl m-2 sm:m-4" />
          <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-32 sm:h-32 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-gold/40 rounded-bl-2xl sm:rounded-bl-3xl m-2 sm:m-4" />
          <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-32 sm:h-32 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-gold/40 rounded-br-2xl sm:rounded-br-3xl m-2 sm:m-4" />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 mb-12"
          >
            <div className="font-arabic text-3xl md:text-4xl text-maroon mb-2">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </div>
            <p className="font-serif italic text-lg text-gold italic">
              "In the Name of Allah, the most beneficent and the most merciful"
            </p>
            
            <div className="h-px w-24 bg-gold/30 mx-auto" />
            
            <div className="space-y-2">
              <p className="font-serif text-xl font-medium tracking-wide">
                Mr. A V ASHRAF HAYAT & Mrs. ZEENATH ASHRAF
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-gold/80">
                AMBALATH VEETTIL HOUSE, HAYAT MAHAL, ESWARAMANGALAM, PONNANI
              </p>
            </div>

            <p className="font-serif text-lg max-w-lg mx-auto leading-relaxed mt-8">
              WE CORDIALLY INVITE YOU TO JOIN US IN CELEBRATION AND PRAYER AS WE HONOR THE JOYOUS OCCASION OF OUR DEAR SON'S WEDDING.
            </p>
          </motion.div>

          {/* Names Section */}
          <div className="relative py-8 sm:py-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight text-red-glare">
                Mohammed Hasbie A V
              </h1>
              <p className="text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.4em] text-gold font-medium">
                Grandson of Late Abdul Kader Haji & Late Chullikkal Hyder
              </p>
              
              <div className="flex items-center justify-center gap-3 sm:gap-4 py-2 sm:py-4">
                <div className="h-px w-8 sm:w-12 bg-gold/40" />
                <span className="font-serif italic text-xl sm:text-2xl text-gold">with</span>
                <div className="h-px w-8 sm:w-12 bg-gold/40" />
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight text-red-glare">
                Jisly Shareefa M I
              </h1>
              <p className="text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.4em] text-gold font-medium">
                D/o. Mr. Late Ismail APM & Mrs. Sulaikha Ismail
              </p>
              <p className="text-[9px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] text-gray-500">
                MULTHAZAM, K.K. JUNCTION, PONNANI
              </p>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5"
            >
              <Sparkles className="w-64 h-64 text-gold" />
            </motion.div>
          </div>

          <div className="font-serif text-2xl text-gold italic my-8 tracking-widest">
            INSHA ALLAH
          </div>

          {/* Event Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 my-10 sm:my-16 border-y border-gold/20 py-8 sm:py-12">
            <div className="space-y-3">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-maroon" />
              <div className="font-serif">
                <p className="text-lg sm:text-xl font-bold">THURSDAY</p>
                <div className="flex items-center justify-center gap-2">
                   <span className="text-3xl sm:text-4xl font-bold text-maroon">09</span>
                   <div className="text-left leading-tight">
                     <p className="text-xs sm:text-sm font-bold">APRIL</p>
                     <p className="text-xs sm:text-sm">2026</p>
                   </div>
                </div>
                <p className="text-[10px] sm:text-xs mt-2 text-gold uppercase tracking-widest">1447 SHAWAL 21</p>
              </div>
            </div>

            <div className="space-y-3 md:border-x border-gold/10 px-4 py-6 md:py-0 border-y md:border-y-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-maroon" />
              <div className="font-serif">
                <p className="text-base sm:text-lg font-bold uppercase tracking-widest">VENUE</p>
                <p className="text-lg sm:text-xl text-maroon font-bold mt-1">R V PALACE</p>
                <p className="text-xs sm:text-sm uppercase">AUDITORIUM, PONNANI</p>
              </div>
            </div>

            <div className="space-y-3">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-maroon" />
              <div className="font-serif">
                <p className="text-base sm:text-lg font-bold uppercase tracking-widest">LUNCH</p>
                <p className="text-lg sm:text-xl font-bold mt-1">12:00 PM TO</p>
                <p className="text-lg sm:text-xl font-bold">3:00 PM</p>
              </div>
            </div>
          </div>

          {/* Countdown Section */}
          <div className="my-16">
            <h3 className="font-serif text-2xl text-maroon mb-8 tracking-widest uppercase">Counting down to the big day</h3>
            <Countdown targetDate={weddingDate} />
          </div>

          {/* Footer */}
          <div className="mt-20 space-y-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold">Best Compliments From:</p>
              <p className="font-serif text-xl font-medium">MUHAMMED TAMEEM & THAHSEENA BANU</p>
            </div>

            <div className="flex flex-col items-center gap-6 pt-8 border-t border-gold/10">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="w-16 h-16 border border-gold/30 rounded-xl flex items-center justify-center bg-gold-light/50 shadow-inner">
                  <span className="font-serif text-3xl text-maroon font-bold">H&J</span>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-2">Scan for Location</p>
                  <motion.a 
                    href="https://www.google.com/maps/dir//RV+Palace,+QWQX%2BHMM,+Kozhikode+Bypass,+Ponnani,+Kerala+679577/@11.2531111,75.7387991,10.7z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba7bbab0005e235:0xe4198584f431f0fc!2m2!1d75.9491857!2d10.7889689?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="block w-24 h-24 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg border border-gold/20 mx-auto sm:mx-0 overflow-hidden"
                  >
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.google.com/maps/dir//RV+Palace,+QWQX%2BHMM,+Kozhikode+Bypass,+Ponnani,+Kerala+679577/@11.2531111,75.7387991,10.7z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba7bbab0005e235:0xe4198584f431f0fc!2m2!1d75.9491857!2d10.7889689?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D" 
                      alt="Location QR Code"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </motion.a>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.a
                  href="https://www.google.com/maps/dir//RV+Palace,+QWQX%2BHMM,+Kozhikode+Bypass,+Ponnani,+Kerala+679577/@11.2531111,75.7387991,10.7z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba7bbab0005e235:0xe4198584f431f0fc!2m2!1d75.9491857!2d10.7889689?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-maroon text-white px-8 py-3 rounded-full font-serif text-lg shadow-lg hover:bg-maroon/90 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <MapPin size={18} />
                  Open in Maps
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gold text-gold px-8 py-3 rounded-full font-serif text-lg hover:bg-gold hover:text-white transition-all w-full sm:w-auto"
                >
                  RSVP Now
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Hearts Animation */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                y: "110vh", 
                x: `${Math.random() * 100}vw`,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                opacity: [0, 0.3, 0], 
                y: "-10vh" 
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity, 
                delay: Math.random() * 20,
                ease: "linear"
              }}
              className="absolute text-gold/20"
            >
              <Heart fill="currentColor" size={Math.random() * 20 + 10} />
            </motion.div>
          ))}
        </div>
      </main>

      {/* Background Music Toggle (Visual Only) */}
      <motion.div 
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <button className="w-12 h-12 bg-white rounded-full shadow-2xl border border-gold/20 flex items-center justify-center text-maroon hover:text-gold transition-colors">
          <Music size={20} />
        </button>
      </motion.div>
    </div>
  );
}
