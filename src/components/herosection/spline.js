'use client';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function SplineBG() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="spline-background"
    >
      <Spline scene="https://prod.spline.design/0ciJ5ZeCPaRGiWCR/scene.splinecode" />
    </motion.div>
  );
}