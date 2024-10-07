import ball from './list-ball.png';
import './rental-header.css';

function Rentalheader() {
  return (
        <div className="rental-list-header">
            <img src={ball} className="list-ball" alt='' />
            <h1>Select entry Pokemon</h1>
            <div className="player-turn">
                <h2 className="player-bubble">1P</h2>
                <h3>'s turn</h3>
            </div>
        </div>
  );
}

export default Rentalheader;
