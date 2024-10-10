import { useState } from "react";
import './rental-list.css' ;
import scroll from './scroll.png' ;
import bulbasaur from './icons/icon-bulbasaur.png' ;
import ivysaur from './icons/icon-ivysaur.png' ;
import venusaur from './icons/icon-venusaur.png' ;
import charmander from './icons/icon-charmander.png' ;
import charmeleon from './icons/icon-charmeleon.png' ;
import charizard from './icons/icon-charizard.png' ;
import squirtle from './icons/icon-squirtle.png' ;
import wartortle from  './icons/icon-wartortle.png' ;
import blastoise from './icons/icon-blastoise.png' ;
import caterpie from './icons/icon-caterpie.png' ;
import metapod from './icons/icon-metapod.png' ;
import butterfree from './icons/icon-butterfree.png' ;
import Rentalblocklg from './rental-box-lg/Rentalblocklg.js' ;



function Rentallist() {

    const [visibility, setVisibility] = useState(false) ;

    function pokeblockHandler() { 
        setVisibility(true) ;
    };

    return (
<div class="rental-list-container">
        {visibility && <Rentalblocklg isVisible={() => setVisibility(false)} ></Rentalblocklg>} 
            <div class="scroll-bar">
                <div class="scroll-bar-bar">
                    <img src={scroll} alt='' />
                </div>
            </div>
            <div class="rental-list-container-head">
                <h2>Rental Pokemon</h2>
            </div>
            <ul class="rental-list-list">
                    <li onClick={pokeblockHandler} id="001">
                        <img src={bulbasaur} />
                        <h3>BULBASAUR</h3>
                        <h3>L50</h3>
                    </li>
                    <li onClick={pokeblockHandler} id="002">
                    <img src={ivysaur} />
                        <h3>IVYSAUR</h3>
                        <h3>L50</h3>
                    </li>
                    <lionClick={pokeblockHandler} id="003">
                    <img src={venusaur} />
                        <h3>VENUSAUR</h3>
                        <h3>L50</h3>
                    </li>
                    <li onClick={pokeblockHandler} id="004">
                    <img src={charmander} />
                        <h3>CHARMANDER</h3>
                        <h3>L50</h3>
                    </li>
                    <li onClick={pokeblockHandler} id="005">
                    <img src={charmeleon} />
                        <h3>CHARMELEON</h3>
                        <h3>L50</h3>
                    </li>
                    <li onClick={pokeblockHandler} id="006">
                    <img src={charizard} />
                        <h3>CHARIZARD</h3>
                        <h3>L50</h3>
                    </li>
                    <li onClick={pokeblockHandler} id="007">
                    <img src={squirtle} />
                        <h3>SQUIRTLE</h3>
                        <h3>L50</h3>
                    </li>
                    <li onClick={pokeblockHandler} id="008">
                    <img src={wartortle} />
                        <h3>WARTORTLE</h3>
                        <h3>L50</h3>
                    </li>
                    <li onClick={pokeblockHandler} id="009">
                    <img src={blastoise} />
                        <h3>BLASTOISE</h3>
                        <h3>L50</h3>
                    </li>
                    <li onClick={pokeblockHandler} id="010">
                    <img src={caterpie} />
                        <h3>CATERPIE</h3>
                        <h3>L50</h3>
                    </li>
                    <li onClick={pokeblockHandler} id="011">
                    <img src={metapod} />
                        <h3>METAPOD</h3>
                        <h3>L50</h3>
                    </li>
                    <li onClick={pokeblockHandler} id="012">
                    <img src={butterfree} />
                        <h3>BUTTERFREE</h3>
                        <h3>L50</h3>
                    </li>
            </ul>
        </div>   
    )
}

export default Rentallist ;