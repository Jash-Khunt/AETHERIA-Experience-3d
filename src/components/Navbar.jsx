import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-500 ${isScrolled ? "bg-forest/80 backdrop-blur-md shadow-lg py-4" : "bg-gradient-to-b from-black/50 to-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="text-mist font-serif text-2xl tracking-widest font-bold">
                AETHERIA
            </div>
            <div className="hidden md:flex items-center gap-8">
                {["Story", "Amenities", "Gallery"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-mist/80 hover:text-gold transition-colors font-sans text-xs uppercase tracking-widest relative group"
                    >
                        {item}
                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                    </a>
                ))}
                <MagneticButton className="px-5 py-2 text-xs hover:bg-gold/90">Reserve</MagneticButton>
            </div>
        </motion.nav>
    );
}
