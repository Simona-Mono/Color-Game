interface DifficultyBtnPorps {
    active: boolean;
    onClick: () => void;
    text: string;
  }
  export default function DifficultyBtn(props: DifficultyBtnPorps) {
  
    return (
        <button
          className={`px-3 hover:bg-customblue-50 hover:text-white ${props.active ? 'active bg-customblue-50 text-white' : ''}`}
          onClick={props.onClick}
        >
          {props.text}
        </button>
      );
  };