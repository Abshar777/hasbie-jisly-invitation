import { motion } from "motion/react";

export const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 1.2, ease: [0.83, 0, 0.17, 1] }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-luxury-black overflow-hidden"
    >
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("https://www.transparenttextures.com/patterns/black-linen.png")`,
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/20 to-transparent" />
      </div>

      <div className="relative flex flex-col items-center px-6">
        {/* Main Logo Container */}
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center">
          {/* Outer Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-gold/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border border-gold/10 rounded-full border-dashed"
          />
          
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <motion.circle
              cx="50%"
              cy="50%"
              r="48%"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              strokeDasharray="100 100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#F9F6EE" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>

          {/* Initials with Shimmer */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10"
          >
            {/* <span className="font-serif text-5xl sm:text-7xl font-bold text-red-glare tracking-tighter">
              H&J
            </span> */}
            <img src="/logo.png" alt="Logo" className="w-30 h-30 sm:w-40 brightness-[100] text-red-glare  sm:h-40" />
          </motion.div>
        </div>

        {/* Loading Text */}
        <div className="mt-12 text-center space-y-4">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-arabic text-2xl sm:text-3xl text-gold-light/90 tracking-widest"
          >
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-48 sm:w-64 mx-auto"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-gold/60 font-medium"
          >
            Preparing Your Invitation
          </motion.p>
        </div>
      </div>

      {/* Decorative Light Flares */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-maroon/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none"
      />
    </motion.div>
  );
};
