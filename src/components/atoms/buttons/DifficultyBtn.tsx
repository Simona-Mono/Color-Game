import { useContext } from "react";
import { GameStateContext } from "../../../contexts/GameStateContext";

interface DifficultyBtnPorps {
    active: boolean;
    difficulty: number;
    text: string;
  }
  export default function DifficultyBtn(props: DifficultyBtnPorps) {
    const { setDifficulty } = useContext(GameStateContext);
  
    const changeDifficulty = () => {
      setDifficulty(props.difficulty);
    };

    return (
        <button
          className={`actions__button ${props.active ? 'actions__button--active' : ''}`}
          onClick={changeDifficulty}
        >
          {props.text}
        </button>
      );
  };