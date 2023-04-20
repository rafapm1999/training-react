import './Cards.css';

function Cards(props) {
    const formatGenre = () => {
        return props.movie.genre.replaceAll("|", " | ");
    }
  return (
    <div className={`card ${props.fadeIn && "fade-in"}`}>
        <h2>{props.movie.title}</h2>
        <h3>{formatGenre()}</h3>
    </div>
  );
}

export default Cards;
