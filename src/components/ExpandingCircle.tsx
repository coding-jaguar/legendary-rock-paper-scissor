import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAppStore } from "../store";

const ExpandingCircle = () => {
  const coordinates = useAppStore((state) => state.coordinates);
  const isModalOpen = useAppStore((state) => state.isModalOpen);

  const circleRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!circleRef.current) return;

    if (isModalOpen) {
      // Animate the circle to expand
      gsap.fromTo(
        circleRef.current,
        {
          scale: 0,
          x: coordinates.x - window.innerWidth / 2,
          y: coordinates.y - window.innerHeight / 2,
          transformOrigin: "center",
        },
        {
          scale: 1000, // Adjust scale to cover the screen
          x: 0,
          y: 0,
          duration: 1, // Smooth expand
          ease: "power2.out",
        }
      );
    } else {
      // Reset animation when modal is closed
      gsap.to(circleRef.current, {
        scale: 0,
        duration: 0.5, // Smooth shrink
        ease: "power2.in",
      });
    }
  }, [isModalOpen, coordinates]);

  return (
    <>
      {isModalOpen && (
        <div
          ref={circleRef}
          className="fixed w-1 h-1 bg-white rounded-full md:hidden"
        ></div>
      )}
    </>
  );
};

export default ExpandingCircle;
