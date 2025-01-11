import { useEffect, useRef, useState } from "react";
import { attackDetails } from "../data";
import { useAppStore } from "../store";
import Attack from "./Attack";
import gsap from "gsap";
import { decideWinner } from "../lib/utils";
import Results from "./Results";

const Fight = () => {
  const userAttack = useAppStore((state) => state.userAttack);
  const incrementScore = useAppStore((state) => state.incrementScore);
  const userAttackObject = attackDetails.filter(
    (singleAttackDetails) => singleAttackDetails.name === userAttack
  )[0];

  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const [houseAttackObject, setHouseAttackObject] = useState<
    typeof userAttackObject | null
  >(null);

  let animation: gsap.core.Tween;
  useEffect(() => {
    if (placeholderRef.current) {
      animation = gsap.to(placeholderRef.current, {
        scale: 1.5,
        duration: 0.5,
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse animation on repeat
        ease: "power1.inOut",
      });
    }

    const timeoutId = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * attackDetails.length);
      setHouseAttackObject(attackDetails[randomIndex]);
      animation.kill();
      gsap.set(placeholderRef.current, { scale: 1 });
    }, 2000);

    return () => {
      clearTimeout(timeoutId); // Clear timeout
      animation.kill(); // Stop animation if component unmounts
    };
  }, []);

  useEffect(() => {
    if (houseAttackObject && userAttack) {
      const resultVar = decideWinner(userAttack, houseAttackObject.name);
      if (resultVar === true) {
        setResult("YOU WIN!!");
        incrementScore();
      }
      if (resultVar === false) {
        setResult("YOU LOSE!!");
      }
      if (resultVar === null) {
        setResult("DRAW!");
      }
    }
  }, [houseAttackObject]);

  return (
    <div className="flex justify-center md:mt-20 mt-32 w-full">
      <div className="grid md:grid-cols-3 w-[80vw] grid-cols-2">
        <div className="col-span-1 col-start-1 flex flex-col items-center">
          <h1 className="text-white text-2xl">YOU PICKED</h1>
          <div className="mt-10 flex justify-center items-center">
            <Attack
              imagePath={userAttackObject.image}
              attackName={userAttackObject.name}
              brightRingClass={userAttackObject.brightRingClass}
              darkRingClass={userAttackObject.darkRingClass}
              //   isWinner={true}
            />
          </div>
        </div>

        <div className="md:col-span-1 col-span-2 md:col-start-2 col-start-1 md:row-start-1 row-start-2">
          <div className="flex-items-center justify-center">
            {result && <Results resultText={result} />}
          </div>
        </div>
        <div className="col-span-1 col-start-2 md:col-start-3 flex flex-col items-center">
          <h1 className="text-white text-2xl">THE HOUSE PICKED</h1>
          {houseAttackObject ? (
            <div className="mt-10 flex justify-center items-center">
              <Attack
                imagePath={houseAttackObject.image}
                attackName={houseAttackObject.name}
                brightRingClass={houseAttackObject.brightRingClass}
                darkRingClass={houseAttackObject.darkRingClass}
              />
            </div>
          ) : (
            <div
              className="w-24 h-24 bg-dark-text rounded-full"
              ref={placeholderRef}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Fight;
