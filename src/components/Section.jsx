import { motion } from "framer-motion";

export default function Section({ id, className, children }) {
    return (
        <div id={id} className={`relative min-h-[50vh] flex flex-col justify-center px-8 md:px-20 py-20 ${className}`}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: false }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
                className="w-full max-w-6xl mx-auto"
            >
                {children}
            </motion.div>
        </div>
    );
}

import { forwardRef } from "react";

export const FadeIn = forwardRef(({ children, className }, ref) => {
    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
});
