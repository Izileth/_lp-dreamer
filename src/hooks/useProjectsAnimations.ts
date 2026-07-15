import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ProjectsAnimationProps {
    containerRef: RefObject<HTMLElement | null>;
    titleRef: RefObject<HTMLElement | null>;
    cardsRef: RefObject<(HTMLElement | null)[]>;
}

export function useProjectsAnimations({
    containerRef,
    titleRef,
    cardsRef,
}: ProjectsAnimationProps) {
    useGSAP(() => {
        if (!titleRef.current || !cardsRef.current) return;

        gsap.set(titleRef.current, { y: 50, opacity: 0 });
        gsap.set(cardsRef.current, { y: 30, opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 }, delay: 0.2 });
        tl.to(titleRef.current, { y: 0, opacity: 1 })
          .to(cardsRef.current, { y: 0, opacity: 1, stagger: 0.1 }, "-=0.6");
    }, { scope: containerRef });
}
