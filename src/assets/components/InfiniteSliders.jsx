import React from 'react';
import { motion } from 'framer-motion';

const InfiniteSliders = () => {
    // Define constants
    const slideWidth = 290; // px
    const gap = 8; // Tailwind gap-2 is approximately 8px

    // Separate image source arrays
    const topImageSrcs = [
        'images/websites/dark/Moon.webp',
        'images/websites/dark/Wation.webp',
        'images/websites/dark/Softwero.webp',
        'images/websites/dark/Ferony.webp',
        'images/websites/dark/Plazma.webp',
        'images/websites/dark/Alexun.webp',
        'images/websites/dark/Babylonflow.webp',
        'images/websites/dark/ChiHous.webp',
        'images/websites/dark/YasserVfx.webp',
        'images/websites/dark/Altego.webp',
        'images/websites/dark/99tweets.webp',
        'images/websites/dark/IntellScale.webp',
    ];

    const bottomImageSrcs = [
        'images/websites/light/FlowForge.webp',
        'images/websites/light/Woodling.webp',
        'images/websites/light/Outlined.webp',
        'images/websites/light/JohnDush.webp',
        'images/websites/light/QuantumMedia.webp',
        'images/websites/light/Stroupe.webp',
        'images/websites/light/OutRide.webp',
        'images/websites/light/Aiva.webp',
        'images/websites/light/GrowthView.webp',
        'images/websites/light/Cloud.webp',
        'images/websites/light/Motiejus.webp',
        'images/websites/light/FastFun.webp',
        'images/websites/light/CopyWiz.webp',
        'images/websites/light/Bupup.webp',
        'images/websites/light/Caldy.webp',
        'images/websites/light/Porsche.webp',
        'images/websites/light/Mujtama.webp',
    ];

    // Number of slides for each row
    const topNumberOfSlides = topImageSrcs.length; // 12
    const bottomNumberOfSlides = bottomImageSrcs.length; // 17

    // Function to create a slide for the top row (stagger starting from second-to-last, reversed)
    const createTopSlide = (src, index) => {
        // Reverse stagger: start at second-to-last (index=10), then index=9, 8, ..., 11
        const staggerOrder = (topNumberOfSlides - 1 - ((index + 2) % topNumberOfSlides)) % topNumberOfSlides;
        const staggerDelay = 0.2 + staggerOrder * 0.05;

        return (
            <motion.div
                key={index}
                className="h-[180px] w-[290px] overflow-hidden rounded-[10px] border border-[var(--gray4)] flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: staggerDelay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    duration: 1.3,
                }}
            >
                <div className="w-full h-full hover:opacity-70 transition-opacity ease-out duration-600 pointer-events-auto">
                    <img
                        src={src}
                        alt="website"
                        className="object-cover w-full h-full object-top"
                    />
                </div>
            </motion.div>
        );
    };

    // Function to create a slide for the bottom row (stagger starting from second-to-last)
    const createBottomSlide = (src, index) => {
        const staggerOrder = (index + 2) % bottomNumberOfSlides; // Shift to start at second-to-last (index=15)
        const staggerDelay = 0.2 + staggerOrder * 0.05;

        return (
            <motion.div
                key={index}
                className="h-[180px] w-[290px] overflow-hidden rounded-[10px] border border-[var(--gray4)] flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: staggerDelay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    duration: 1.3,
                }}
            >
                <div className="w-full h-full hover:opacity-70 transition-opacity ease-out duration-600 pointer-events-auto">
                    <img
                        src={src}
                        alt="website"
                        className="object-cover w-full h-full object-top"
                    />
                </div>
            </motion.div>
        );
    };

    // Create triplicated slides for seamless looping
    const triplicatedTopSlides = [...topImageSrcs, ...topImageSrcs, ...topImageSrcs].map((src, i) =>
        createTopSlide(src, i % topNumberOfSlides)
    );
    const triplicatedBottomSlides = [...bottomImageSrcs, ...bottomImageSrcs, ...bottomImageSrcs].map((src, i) =>
        createBottomSlide(src, i % bottomNumberOfSlides)
    );

    // Calculate total width including gaps for each row
    const topTotalWidth = topNumberOfSlides * (slideWidth + gap) - gap; // 12 * (290 + 8) - 8 = 3568px
    const bottomTotalWidth = bottomNumberOfSlides * (slideWidth + gap) - gap; // 17 * (290 + 8) - 8 = 5058px

    // Match sliding speed: Top row speed = 3568px / 25s = 142.72px/s
    const bottomDuration = bottomTotalWidth / (topTotalWidth / 25); // 5058 / 142.72 ≈ 35.44s

    return (
        <div className="w-[100vw] h-fit flex flex-col gap-2">
            {/* Top row: Infinite slider moving right to left */}
            <div className="relative w-full overflow-hidden h-[180px]">
                <motion.div
                    className="flex flex-row gap-2"
                    animate={{
                        x: ['0px', `-${topTotalWidth}px`],
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 25,
                        repeat: Infinity,
                    }}
                >
                    {triplicatedTopSlides}
                </motion.div>
            </div>

            {/* Bottom row: Infinite slider moving left to right */}
            <div className="relative w-full overflow-hidden h-[180px]">
                <motion.div
                    className="flex flex-row gap-2"
                    animate={{
                        x: [`-${bottomTotalWidth}px`, '0px'],
                    }}
                    transition={{
                        ease: 'linear',
                        duration: bottomDuration, // ≈ 35.44s to match top row speed
                        repeat: Infinity,
                    }}
                >
                    {triplicatedBottomSlides}
                </motion.div>
            </div>
        </div>
    );
};

export default InfiniteSliders;