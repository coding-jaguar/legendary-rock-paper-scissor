import classNames from "classnames";
import { useAppStore } from "../store";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AttackProps {
  imagePath: string;
  attackName: string;
  darkRingClass: string; // Class for the thin dark ring
  brightRingClass: string; // Class for the thick bright ring
  isWinner?: boolean;
}

const Attack = ({
  imagePath,
  attackName,
  darkRingClass,
  brightRingClass,
  isWinner,
}: AttackProps) => {
  const setUserAttack = useAppStore((state) => state.setUserAttack);

  const attackRef = useRef<HTMLDivElement | null>(null);
  const rippleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isWinner && attackRef.current) {
      // Pulse effect on the attack
      gsap.to(attackRef.current, {
        scale: 1.2,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Ripple effect behind the attack
      if (rippleRef.current) {
        gsap.fromTo(
          rippleRef.current,
          { scale: 1, opacity: 0.5 },
          {
            scale: 3,
            opacity: 0,
            duration: 1.5,
            repeat: -1,
            ease: "power1.out",
          }
        );
      }
    }

    return () => {
      gsap.killTweensOf(attackRef.current);
      gsap.killTweensOf(rippleRef.current);
    };
  }, [isWinner]);

  return (
    <div
      className="relative flex items-center justify-center w-[90%] h-[90%] min-w-[100px] min-h-[100px] md:w-44 md:h-44"
      onClick={() => {
        setUserAttack(attackName);
      }}
      ref={attackRef}
    >
      {isWinner && (
        <div
          ref={rippleRef}
          className="absolute inset-0 rounded-full bg-blue-400 z-0"
        ></div>
      )}
      {/* Thin Dark Ring */}
      <div
        className={classNames(
          "absolute inset-0 rounded-full border-[4px] shadow-inner z-20",
          darkRingClass // Dynamic bright ring class
        )}
      ></div>

      {/* Thick Gray Ring (Shadow Effect) */}
      <div className="absolute inset-[2px] rounded-full border-[6px] border-gray-400"></div>

      {/* Thick Bright Ring */}
      <div
        className={classNames(
          "absolute inset-0 rounded-full border-[8px] -translate-y-1 z-30",
          brightRingClass // Dynamic dark ring class
        )}
      ></div>

      {/* Inner Circle */}
      <div className="absolute inset-2 bg-gradient-to-b from-white to-gray-200 rounded-full"></div>

      {/* Image/Icon */}
      <img
        src={imagePath}
        alt={attackName}
        className="relative z-10 w-9 h-9 md:w-14 md:h-14"
      />
    </div>
  );
};

export default Attack;
