interface HeaderProps {
    colorModel: string;
    backgroundColor: string;
  }
  export default function Header(props: HeaderProps) {
   // console.log(props.colorModel)
  
    return (
        <header className="text-center text-white text-4xl font-bold p-6" style={{ background: props.backgroundColor }}>
          <h1>
            MONO'S
            <span className='block py-2 drop-shadow-lg'> {props.colorModel}</span>
            COLOR GAME
          </h1>
        </header>
      );
  };