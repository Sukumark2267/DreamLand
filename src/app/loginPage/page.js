"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import './Login.css';

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  
  useEffect(() => {
    gsap.to("#circularText", {
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 30,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  const variants = {
    hidden: { opacity: 0, x: isSignUp ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isSignUp ? -100 : 100 },
  };

  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-800 px-4 py-25">
      <div className="login-cont relative w-full max-w-6xl min-h-[80vh] flex flex-col md:flex-row backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
        {/* Background image */}
        <div className="absolute inset-0 ">
          <Image
            src="/images/elements/bg-girl.png"
            alt="Background"
            fill
            className="object-cover "
          />
          <Image
            src="/images/logo/dl_white_empty_secondary.png"
            alt="Background"
            fill
            className="object-cover z-10"
          />
          <Image
            src="/images/elements/bg-girl2.png"
            alt="Background"
            fill
            className="object-cover z-10"
          />
        </div>
        <div id="circularText" class="absolute w-full h-full flex items-center justify-center pointer-events-none z-0">
          <svg viewBox="0 0 300 300" class="w-[900px] h-[900px]">
            <defs>
              <path id="circlePath" d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0" />
            </defs>
            <text fill="white" font-size="24" font-family="Cinzel">
              <textPath href="#circlePath" startOffset="-10%">
                EXHALE. REPEAT. INHALE. EXHALE. REPEAT. INHALE. EXHALE. REPEAT. INHALE.
              </textPath>
            </text>
          </svg>
        </div>


        {/* Form Panel */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center backdrop-blur-sm bg-black/60 text-white overflow-hidden z-10">
          <AnimatePresence mode="wait">
            {isSignUp ? (
              <motion.div
                key="signup"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Create Account</h2>
                <input type="text" placeholder="Name" className="input" />
                <input type="email" placeholder="Email" className="input" />
                <input type="password" placeholder="Password" className="input" />
                <button className="btn-primary">Sign Up</button>
                <p className="text-sm text-gray-300">
                  Already have an account?
                  <button
                    onClick={() => setIsSignUp(false)}
                    className="text-primary ml-1 underline"
                  >
                    Sign In
                  </button>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="signin"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Sign In</h2>
                <input type="email" placeholder="Email" className="input" />
                <input type="password" placeholder="Password" className="input" />
                <button className="btn-primary">Sign In</button>
                <p className="text-sm text-gray-300">
                  Don&apos;t have an account?
                  <button
                    onClick={() => setIsSignUp(true)}
                    className="text-primary ml-1 underline"
                  >
                    Sign Up
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Side Panel */}
        <div className="side-panel hidden md:flex w-full md:w-1/2 items-center justify-center p-6 lg:p-12 bg-gradient-to-tr from-primary to-secondary text-white z-10">
          <div className="text-center space-y-4 max-w-md">
            <h2 className="text-4xl font-bold">
              {isSignUp ? "Welcome Back!" : "New Here?"}
            </h2>
            <p className="text-sm text-gray-100">
              {isSignUp
                ? "To keep connected with us, please login with your personal info."
                : "Sign up and start your journey with us."}
            </p>
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="btn-secondary"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
