import './Title.css';

function Title(props) {
  return (
    <header className="Title">
			<h1>{props.title_text}</h1>
    </header>
  );
}

export default Title;
