import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollIndicator() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 h-40 w-1 bg-white/10 rounded-full overflow-hidden hidden md:block z-50">
            <motion.div
                className="w-full bg-gold origin-top"
                style={{ scaleY, height: "100%" }}
            />
        </div>
    );
}
