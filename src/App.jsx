import React, { useState, useEffect } from "react";
import {
  FaSkull,
  FaCode,
  FaTerminal,
  FaNetworkWired,
  FaBrain,
  FaAngleRight,
} from "react-icons/fa";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import coverImage from "./assets/cover2.png";
import "./index.css";

// Matrix code rain component
const MatrixRain = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xs font-mono text-green-500 animate-matrix whitespace-nowrap"
          initial={{ y: -100 }}
          animate={{ y: 1000 }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        >
          {Array.from({ length: 30 })
            .map(() => String.fromCharCode(Math.floor(Math.random() * 93) + 33))
            .join("")}
        </motion.div>
      ))}
    </div>
  );
};

// Tech button component with Framer Motion
const TechButton = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      scale: 1.03,
      transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      scale: 1,
      transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
    });
  };

  return (
    <motion.button
      className="px-6 py-3 rounded-md font-medium text-white border border-cyan-500/30 relative overflow-hidden group"
      style={{
        background: isHovered
          ? "linear-gradient(90deg, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.15) 100%)"
          : "rgba(0,0,0,0.4)",
        boxShadow: isHovered ? "0 0 25px rgba(6,182,212,0.3)" : "none",
      }}
      animate={controls}
      whileTap={{ scale: 0.97 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-cyan-400 to-blue-500`}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        ></motion.div>
      </div>
      <div className="flex items-center">
        {children}
        <motion.div
          className="ml-2"
          animate={{ x: isHovered ? 3 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaAngleRight />
        </motion.div>
      </div>
    </motion.button>
  );
};

// Animated tech icon component
const TechIcon = ({ icon: Icon, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
      whileHover={{
        scale: 1.2,
        rotate: [0, 5, -5, 0],
        transition: { duration: 0.5 },
      }}
    >
      <Icon className={`text-3xl ${color}`} />
    </motion.div>
  );
};

// Particle effect component
const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => {
        const size = Math.random() * 4 + 1;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        );
      })}
    </div>
  );
};

// Scanline effect component
const Scanlines = () => {
  return (
    <div className="tech-scanline absolute inset-0 z-0 pointer-events-none"></div>
  );
};

// Glitch text component
const GlitchText = ({ children, className = "" }) => {
  return (
    <motion.span
      className={`glitch inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  );
};

// Tech-style image display component
const TechImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden border border-white/10 shadow-lg mt-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isLoaded ? 1 : 0,
        y: isLoaded ? 0 : 50,
      }}
      transition={{
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      }}
      style={{ maxWidth: "90%" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 tech-scanline z-20 pointer-events-none opacity-30"></div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 z-20"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-400 z-20"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-400 z-20"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 z-20"></div>

      <img
        src={src}
        alt={alt}
        className="w-full object-cover z-0"
        onLoad={() => setIsLoaded(true)}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Create smooth transforms for parallax effect
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  useEffect(() => {
    // Track mouse movement for parallax effect
    const handleMouseMove = (e) => {
      const newPosition = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };

      setMousePosition(newPosition);
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };

    // Set visibility after a short delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, [x, y]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden p-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-black">
        <motion.div
          className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-600 via-purple-700 to-teal-400"
          animate={{
            background: [
              "linear-gradient(to bottom right, rgba(37, 99, 235, 0.2), rgba(126, 34, 206, 0.2), rgba(20, 184, 166, 0.2))",
              "linear-gradient(to bottom right, rgba(20, 184, 166, 0.2), rgba(37, 99, 235, 0.2), rgba(126, 34, 206, 0.2))",
              "linear-gradient(to bottom right, rgba(126, 34, 206, 0.2), rgba(20, 184, 166, 0.2), rgba(37, 99, 235, 0.2))",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        ></motion.div>

        {/* Matrix code rain effect */}
        <MatrixRain />

        {/* Scanlines effect */}
        <Scanlines />

        {/* Tech grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full w-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-white/5 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-12 h-full w-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-b border-white/5 w-full"></div>
            ))}
          </div>
        </div>

        {/* Advanced particle effect */}
        <ParticleField />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center py-12">
        {/* Content with parallax effect */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="relative z-10 max-w-2xl w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              style={{
                perspective: 1000,
              }}
            >
              <motion.div
                className="backdrop-blur-lg bg-black/40 rounded-2xl border border-white/10 p-8 shadow-2xl relative overflow-hidden group"
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-2xl blur opacity-20"
                  animate={{
                    opacity: [0.15, 0.25, 0.15],
                    background: [
                      "linear-gradient(to right, rgba(6, 182, 212, 0.5), rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5))",
                      "linear-gradient(to right, rgba(59, 130, 246, 0.5), rgba(6, 182, 212, 0.5), rgba(139, 92, 246, 0.5))",
                      "linear-gradient(to right, rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5), rgba(6, 182, 212, 0.5))",
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                ></motion.div>

                {/* Icon grid */}
                <div className="flex justify-between mb-6">
                  <TechIcon icon={FaSkull} color="text-red-500" delay={0} />
                  <TechIcon icon={FaCode} color="text-blue-400" delay={0.1} />
                  <TechIcon
                    icon={FaTerminal}
                    color="text-green-400"
                    delay={0.2}
                  />
                  <TechIcon
                    icon={FaNetworkWired}
                    color="text-purple-400"
                    delay={0.3}
                  />
                  <TechIcon
                    icon={FaBrain}
                    color="text-yellow-400"
                    delay={0.4}
                  />
                </div>

                <motion.h1
                  className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-violet-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <GlitchText>HAHA! GOT YOU THERE.</GlitchText>
                </motion.h1>

                <motion.p
                  className="text-xl mb-8 text-center leading-relaxed font-light text-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  We don't know about your attendance but we
                  <motion.span
                    className="text-cyan-300 font-medium mx-1"
                    animate={{
                      textShadow: [
                        "0 0 5px rgba(6, 182, 212, 0.2)",
                        "0 0 20px rgba(6, 182, 212, 0.6)",
                        "0 0 5px rgba(6, 182, 212, 0.2)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    definitely
                  </motion.span>
                  want you here.
                </motion.p>

                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  <TechButton>ACCESS THE JEC TRIBUNE</TechButton>
                </motion.div>

                <motion.div
                  className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  style={{ originX: 0 }}
                ></motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cover image display */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="flex justify-center items-center w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <TechImage src={coverImage} alt="Cover Image" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated tech background elements */}
      <motion.div
        className="absolute bottom-4 right-4 text-white/20 text-sm font-mono"
        animate={{
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <GlitchText>SYSTEM::THE JEC TRIBUNE//ACTIVE</GlitchText>
      </motion.div>

      {/* Tech coordinates display */}
      <div className="absolute top-4 left-4 flex flex-col text-xs font-mono text-white/30">
        <motion.div
          className="flex gap-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-cyan-500">X:</span>
          <motion.span>{(mousePosition.x + 0.5).toFixed(3)}</motion.span>
        </motion.div>
        <motion.div
          className="flex gap-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span className="text-cyan-500">Y:</span>
          <motion.span>{(mousePosition.y + 0.5).toFixed(3)}</motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
