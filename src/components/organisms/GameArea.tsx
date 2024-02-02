import { useContext } from "react";
import SquareGrid from "../molecules/SquareGrid";
import { GameStateContext } from "../../contexts/GameStateContext";
import WrapperActions from "../molecules/WrapperActions";

export default function GameArea() {
const { gridColumns } = useContext(GameStateContext);

  return (
    <section className='home__game-area'>
     <div className='game-area'>
      <div className="game-area__actions">
        <WrapperActions />
      </div>
      <div className='game-area__grid'>
       <SquareGrid col={gridColumns} gap={12} />
      </div>
     </div>
    </section>
  );
}
