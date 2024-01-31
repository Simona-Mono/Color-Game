interface HeaderProps {
    title: string;
    backgroundColor: string;
  }
  export default function Header(props: HeaderProps) {
  
    return (
        <header className="text-center text-white text-4xl font-bold p-6" style={{ background: props.backgroundColor }}>
          <h1>
            MONO'S
            <span className='block py-2 drop-shadow-lg'> {props.title}</span>
            COLOR GAME
          </h1>
        </header>
      );
  };