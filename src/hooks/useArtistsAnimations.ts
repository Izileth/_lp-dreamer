import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ArtistsAnimationProps {
    containerRef: RefObject<HTMLElement | null>;
    titleRef: RefObject<HTMLElement | null>;
    listRef: RefObject<(HTMLElement | null)[]>;
}

export function useArtistsAnimations({
    containerRef,
    titleRef,
    listRef,
}: ArtistsAnimationProps) {
    useGSAP(() => {
        if (!titleRef.current || !listRef.current) return;

        gsap.set(titleRef.current, { x: -50, opacity: 0 });
        gsap.set(listRef.current, { x: 30, opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 }, delay: 0.2 });
        tl.to(titleRef.current, { x: 0, opacity: 1 })
          .to(listRef.current, { x: 0, opacity: 1, stagger: 0.15 }, "-=0.6");
    }, { scope: containerRef });
}
