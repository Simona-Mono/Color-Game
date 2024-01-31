interface NewGameBtnPorps {
    onClick: () => void;
    text: string;
  }
  export default function NewGameBtn(props: NewGameBtnPorps) {
  
    return (
        <button onClick={props.onClick} className='hover:bg-customblue-50 hover:text-white uppercase px-3'>
          {props.text}
        </button>
      );
  };