import { motion, useScroll, useTransform } from 'framer-motion';

export default function SnakeBorder({ targetRef }) {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20">
            <defs>
                <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
                    <stop offset="50%" stopColor="#C5A059" />
                    <stop offset="100%" stopColor="#ffeba3" />
                </linearGradient>
            </defs>
            <motion.rect
                width="100%"
                height="100%"
                rx="16" // Matches rounded-2xl
                fill="none"
                stroke="url(#snakeGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ pathLength, opacity }}
                className="drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]"
            />
        </svg>
    );
}
