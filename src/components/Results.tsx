import { useAppStore } from "../store";

const Results = ({ resultText }: { resultText: string }) => {
  const setUserAttack = useAppStore((state) => state.setUserAttack);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white p-4 text-5xl">{resultText}</h1>
      <button
        onClick={() => setUserAttack("")}
        className="text-dark-text bg-white px-10 py-5 rounded-lg"
      >
        PLAY AGAIN
      </button>
    </div>
  );
};
export default Results;
