import { useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Simple overlay transition
        const tl = gsap.timeline();

        // 1. Show overlay
        tl.to(overlayRef.current, {
            y: "0%",
            duration: 0.6,
            ease: "power4.inOut",
        })
        // 2. Hide overlay
        .to(overlayRef.current, {
            y: "100%",
            duration: 0.6,
            delay: 0.2,
            ease: "power4.inOut",
        })
        // Reset position for next transition
        .set(overlayRef.current, { y: "-100%" });

        // Content animation
        gsap.fromTo(contentRef.current, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power3.out" }
        );

    }, { dependencies: [location.pathname] });

    return (
        <div className="relative w-full min-h-screen">
            <div 
                ref={overlayRef}
                className="fixed inset-0 bg-[#0d0d0d] z-[200] pointer-events-none"
                style={{ transform: "translateY(-100%)" }}
            />
            <div ref={contentRef}>
                {children}
            </div>
        </div>
    );
}
