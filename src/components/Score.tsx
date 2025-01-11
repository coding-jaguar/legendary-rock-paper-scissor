import { useAppStore } from "../store";

const Score = () => {
  const score = useAppStore((state) => state.score);
  return (
    <div className="flex items-center justify-center">
      <div className="border-white border-2 rounded-lg flex justify-between items-center p-6 md:text-3xl md:max-w-[50vw] w-full max-w-md">
        {/* Left Column */}
        <div className="text-white flex flex-col">
          <div className="leading-none">ROCK</div>
          <div className="leading-none">PAPER</div>
          <div className="leading-none">SCISSOR</div>
          <div className="leading-none">LIZARD</div>
          <div className="leading-none">SPOCK</div>
        </div>

        {/* Right Column */}
        <div className="bg-white px-4 py-2 rounded-lg flex flex-col items-center">
          <div className="text-score-text">SCORE</div>
          <h1 className="text-dark-text text-4xl">{score}</h1>
        </div>
      </div>
    </div>
  );
};

export default Score;
