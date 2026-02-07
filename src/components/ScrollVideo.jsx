import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 200;

export default function ScrollVideo() {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const loadImages = async () => {
            const promises = Array.from({ length: FRAME_COUNT }, (_, i) => {
                const img = new Image();
                // Construct filename: ezgif-frame-001.jpg to ezgif-frame-200.jpg
                // Note: i goes from 0 to 199, so we need i + 1
                const frameNum = (i + 1).toString().padStart(3, '0');
                img.src = `/sequence/ezgif-frame-${frameNum}.jpg`;
                return new Promise((resolve) => {
                    img.onload = () => resolve(img);
                    img.onerror = () => {
                        console.error(`Failed to load frame ${frameNum}`);
                        resolve(null);
                    };
                });
            });

            const loaded = await Promise.all(promises);
            // Filter out nulls if any failed
            setImages(loaded.filter(Boolean));
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const renderFrame = (index) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext('2d');
        const img = images[index];

        // Object Cover Logic
        const w = canvas.width;
        const h = canvas.height;
        const scale = Math.max(w / img.width, h / img.height);
        const x = (w - img.width * scale) / 2;
        const y = (h - img.height * scale) / 2;

        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded && images.length > 0) {
            // Force initial render at 0
            renderFrame(0);

            // Handle resize
            const handleResize = () => {
                if (canvasRef.current) {
                    canvasRef.current.width = window.innerWidth;
                    canvasRef.current.height = window.innerHeight;
                    const currentProgress = scrollYProgress.get();
                    // Safely calculate mapping
                    const idx = Math.min(
                        images.length - 1,
                        Math.floor(currentProgress * (images.length - 1))
                    );
                    renderFrame(idx);
                }
            };

            window.addEventListener('resize', handleResize);
            handleResize(); // trigger once

            return () => window.removeEventListener('resize', handleResize);
        }
    }, [isLoaded, images]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // Map scroll 0-1 to frame index 0-(N-1)
        const frameIndex = Math.min(
            images.length - 1,
            Math.floor(latest * (images.length - 1))
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    if (!isLoaded) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-forest text-gold z-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                    <p className="font-serif text-lg tracking-widest uppercase">Loading Experience...</p>
                </div>
            </div>
        );
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
        />
    );
}
