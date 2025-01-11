import { FiX } from "react-icons/fi";
import { useAppStore } from "../store";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Modal = () => {
  const isModalOpen = useAppStore((state) => state.isModalOpen);
  const closeModal = useAppStore((state) => state.closeModal);

  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isModalOpen && divRef.current) {
      // Animate the modal when it opens
      gsap.fromTo(
        divRef.current,
        {
          opacity: 0, // Start opacity
          scale: 0.8, // Start scale for a slight zoom effect
        },
        {
          opacity: 1, // Target opacity
          scale: 1, // Reset scale
          duration: 0.5, // Duration in seconds
          ease: "power2.out", // Smooth easing
        }
      );
    }
  }, [isModalOpen]); // Run this effect when isModalOpen changes

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center h-screen w-screen"
      ref={divRef}
    >
      {/* Modal Content */}
      <div className="bg-white rounded-lg p-8 md:w-[40vw] md:h-[40vw] w-screen h-screen relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl md:text-4xl text-dark-text">RULES</h1>
          <FiX
            className="text-2xl md:text-4xl cursor-pointer"
            onClick={closeModal}
          />
        </div>

        {/* Content */}
        <div className="flex justify-center items-center">
          <img
            src="./images/image-rules-bonus.svg"
            alt="Rules"
            className="w-96 h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
