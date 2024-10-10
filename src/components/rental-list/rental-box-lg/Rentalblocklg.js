
import './rental-block-lg.css' ;
import cup from './cup.png' ; 
import cleft from './cleft.png' ; 
import cright from './cright.png' ; 
import cdown from './cdown.png' ; 
import bulba from './bulba.png' ;


function Rentalblocklg({isVisible}) {

    return (
    <div className="pokeblock">
    <div className="block-heading">
        <h2 className="block-name">BULBASAUR</h2>
        <h2 className="block-lv">L 50</h2>
        <h3 className="block-dex">No.001</h3>
        <h3 className="block-name-2">BULBASAUR</h3>
    </div>
    <div className="block-select">
        <h2 className="block-select-heading">ENTER</h2>
        <h2 className="hand-select" onClick={isVisible}>Yes</h2>
        <h2 className="hand-select" onClick={isVisible} >No</h2>
    </div>
    <div className="block-img">
        <img src={bulba} alt="" /> 
    </div>
    <div className="block-data">
    <div className="type type-1">
        <h3>TYPE 1</h3> 
        <h3>Grass</h3>
    </div>
    <div className="type type-2">
        <h3>TYPE 2</h3> 
        <h3>Poison</h3>
    </div>
    <div className="stats">
        <div className="stat-kind">
            <h3>ATTACK</h3>
            <h3>DEFENSE</h3>
            <h3>SPEED</h3>
            <h3>SPECIAL</h3>
        </div>
        <div className="stat-value">
            <h3>80</h3>
            <h3>81</h3>
            <h3>77</h3>
            <h3>97</h3>
        </div>
    </div>
    <div className="hp">
        <h2>HP</h2> <h2>132</h2>
    </div>
    </div>
    <div className="block-moves">
        <h3 className="rental-mark">RENTAL</h3>

        <div className="move-up">
            <img src={cup} alt="" />
            <h3 className="type-icon grass-icon">Gr</h3>
            <h2 className="grass-move">LEECH SEED</h2>
        </div>
        <div className="moves-middle">
        <div className="move-left">
            <h3 className="type-icon grass-icon">Gr</h3>
            <h2 className="grass-move">RAZOR LEAF</h2>
            <img src={cleft} alt="" />
        </div>
        <div className="move-right">
            <img src={cright} alt="" />
            <h3 className="type-icon poison-icon">Po</h3>
            <h2 className="poison-move">TOXIC</h2>
        </div>
        </div>
        <div className="move-down">
            <h3 className="type-icon normal-icon">N</h3>
            <h2 className="normal-move">BODY SLAM</h2>
            <img src={cdown} alt="" />
        </div>
    </div>
    </div>
)
} ;

export default Rentalblocklg ;