"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Template({children}: {children: React.ReactNode}) {
    return (
        <AnimatePresence>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: "easeInOut", duration: 2 }}
			>
				{children}
			</motion.div>
        </AnimatePresence>
    );
}
