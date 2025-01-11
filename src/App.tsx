import ChooseAttack from "./components/ChooseAttack";
import ExpandingCircle from "./components/ExpandingCircle";
import Fight from "./components/Fight";
import Modal from "./components/Modal";
import RulesButton from "./components/RulesButton";
import Score from "./components/Score";
import { useAppStore } from "./store";

function App() {
  const userAttack = useAppStore((state) => state.userAttack);
  return (
    <div className="h-screen w-full bg-gradient-top-bottom p-4 relative">
      <Score />

      {userAttack ? <Fight /> : <ChooseAttack />}
      <div className="md:absolute md:bottom-20 md:right-20 p-4 flex justify-center mt-20">
        <RulesButton />
      </div>
      <Modal />
      <ExpandingCircle />
    </div>
  );
}

export default App;
