import { useContext } from "react";
import SquareGrid from "../molecules/SquareGrid";
import { GameStateContext } from "../../contexts/GameStateContext";

export default function GameArea() {
const { gridColumns } = useContext(GameStateContext);

  return (
    <section className='home__game-area'>
      <div className='game-area'>
        <SquareGrid col={gridColumns} gap={12} />
      </div>
    </section>
  );
}
