import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface HeroAnimationProps {
    containerRef: RefObject<HTMLElement | null>;
    lettersRef: RefObject<(HTMLElement | null)[]>;
    nftRefs: RefObject<(HTMLElement | null)[]>;
    rightColRef: RefObject<HTMLElement | null>;
    activeSlide: number;
    slidesZIndexes: number[];
}

export function useHeroAnimations({
    containerRef,
    lettersRef,
    nftRefs,
    rightColRef,
    activeSlide,
    slidesZIndexes,
}: HeroAnimationProps) {
    // 1. Intro Animation Sequence
    useGSAP(() => {
        if (!lettersRef.current || !nftRefs.current || !rightColRef.current) return;

        gsap.set(lettersRef.current, { x: -100, opacity: 0 });
        gsap.set(nftRefs.current, { scale: 1.2, opacity: 0, y: 50 });
        gsap.set(rightColRef.current, { x: 50, opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 }, delay: 0.6 });

        tl.to(lettersRef.current, { x: 0, opacity: 1, stagger: 0.1 })
            .to(nftRefs.current, {
                scale: 1,
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 1.2,
                ease: "back.out(1.2)"
            }, "-=0.8")
            .to(rightColRef.current, { x: 0, opacity: 1 }, "-=0.8");
    }, { scope: containerRef });

    // 2. Active Slide Switch Animation (Blur & Focus Depth of Field Effect)
    useGSAP(() => {
        if (!nftRefs.current) return;

        nftRefs.current.forEach((ref, i) => {
            if (ref) {
                if (i === activeSlide) {
                    gsap.to(ref, {
                        scale: 1.1,
                        zIndex: 50,
                        filter: "blur(0px) grayscale(0%) contrast(1.1)",
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(ref, {
                        scale: 1,
                        zIndex: slidesZIndexes[i] ?? 10,
                        filter: "blur(6px) grayscale(0.8) contrast(0.9)",
                        opacity: 0.4,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                }
            }
        });
    }, { dependencies: [activeSlide], scope: containerRef });
}
