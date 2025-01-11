import classNames from "classnames";
import { attackDetails } from "../data";
import Attack from "./Attack";

const getAttackComponents = () => {
  const attackComponents: { [key: string]: JSX.Element } = {};
  for (let attack of attackDetails) {
    attackComponents[attack.name] = (
      <Attack
        imagePath={attack.image}
        attackName={attack.name}
        brightRingClass={attack.brightRingClass}
        darkRingClass={attack.darkRingClass}
      />
    );
  }
  return attackComponents;
};

const ChooseAttack = () => {
  const attackComponents = getAttackComponents();

  return (
    <div className="flex justify-center md:mt-20 mt-32">
      <div className="relative md:w-[400px] md:h-[400px] w-[250px] h-[250px]">
        <img
          src="./images/bg-pentagon.svg"
          alt=""
          className="z-0 w-full h-full"
        />

        <div
          className={classNames(
            "absolute md:-right-10 md:-bottom-20",
            "-right-5 -bottom-10",
            "transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          )}
        >
          {attackComponents["rock"]}
        </div>
        <div
          className={classNames(
            "absolute md:top-20 md:-right-20",
            "top-12 -right-10",
            "transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          )}
        >
          {attackComponents["paper"]}
        </div>
        <div
          className={classNames(
            "absolute md:top-[-30px] md:left-1/2 md:transform md:-translate-x-1/2",
            "-top-10 left-1/2 -translate-x-1/2",
            "transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          )}
        >
          {attackComponents["scissors"]}
        </div>
        <div
          className={classNames(
            "absolute md:top-20 md:-left-20",
            "top-12 -left-10",
            "transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          )}
        >
          {attackComponents["spock"]}
        </div>
        <div
          className={classNames(
            "absolute md:-left-10 md:-bottom-20",
            "-left-5 -bottom-10",
            "transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          )}
        >
          {attackComponents["lizard"]}
        </div>
      </div>
    </div>
  );
};

export default ChooseAttack;
