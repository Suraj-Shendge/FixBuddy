"use client";

import { motion } from "framer-motion";

export function SkillCard({ name, onClick }: { name: string; onClick?: () => void }) {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="glass w-full p-5 text-left"
    >
      <p className="font-medium">{name}</p>
    </motion.button>
  );
}
