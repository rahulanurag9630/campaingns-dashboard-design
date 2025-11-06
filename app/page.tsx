'use client';

import { motion } from 'framer-motion';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';


export default function Home() {
  // redirect('/dashboard');
  const router = useRouter();



  const headline = ['Building', 'the', 'Future', 'of', 'Smart', 'Technology'];

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #25826A, #35a47f)',
      }}
    >
      {/* Animated glow background */}
      <motion.div
        className="absolute inset-0 opacity-25"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.2), transparent 70%)',
        }}
      />

      {/* Hero Text */}
      <div className="z-10 max-w-3xl px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 leading-tight flex flex-wrap justify-center gap-2"
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: 'easeOut',
              }}
              className="inline-block"
            >
              {word === 'Smart' || word === 'Technology' ? (
                <span className="relative">
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="bg-gradient-to-r from-white to-[#e3fcef] bg-clip-text text-transparent"
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Avidion helps modern businesses innovate faster with intelligent software,
          clean design, and data-driven performance.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255,255,255,0.4)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg bg-white text-[#25826A] hover:bg-[#f1f1f1] transition-all"
          onClick={() => router.push('/dashboard')} // ✅ client-side redirect
        >
          Get Started
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 text-white/70 text-sm"
      >
        Scroll Down ↓
      </motion.div>
    </section >
  );
}


