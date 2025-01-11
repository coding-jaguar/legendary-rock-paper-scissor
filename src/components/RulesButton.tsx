import { forwardRef } from "react";
import { useAppStore } from "../store";

const RulesButton = forwardRef<HTMLButtonElement>((props, ref) => {
  const toggleModal = useAppStore((state) => state.toggleModal);
  const setCoordinates = useAppStore((state) => state.setCordinates);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCoordinates(e.clientX, e.clientY);

    toggleModal();
  };

  return (
    <button
      ref={ref}
      className="text-white text-5xl border-white border-4 bg-transparent px-4 py-2 rounded-lg"
      onClick={(e) => handleClick(e)}
      {...props} // Pass additional props if needed
    >
      RULES
    </button>
  );
});

export default RulesButton;
