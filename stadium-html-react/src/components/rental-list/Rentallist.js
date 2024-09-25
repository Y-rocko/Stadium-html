import './rental-list.css' ;
import scroll from './scroll.png' ;
import bulbasaur from './icon-charizard.png' ;

function Rentallist() {
    return (
<div class="rental-list-container">
            <div class="scroll-bar">
                <div class="scroll-bar-bar">
                    <img src={scroll} alt='' />
                </div>
            </div>
            <div class="rental-list-container-head">
                <h2>Rental Pokemon</h2>
            </div>
            <ul class="rental-list-list">
                    <li  id="001">
                        <img src={bulbasaur} />
                        <h3>BULBASAUR</h3>
                        <h3>L50</h3>
                    </li>
                    <li id="002">
                    <img src={bulbasaur} />
                        <h3>IVYSAUR</h3>
                        <h3>L50</h3>
                    </li>
                    <li id="003">
                    <img src={bulbasaur} />
                        <h3>VENUSAUR</h3>
                        <h3>L50</h3>
                    </li>
                    <li id="004">
                    <img src={bulbasaur} />
                        <h3>CHARMANDER</h3>
                        <h3>L50</h3>
                    </li>
                    <li id="005">
                    <img src={bulbasaur} />
                        <h3>CHARMELEON</h3>
                        <h3>L50</h3>
                    </li>
                    <li id="006">
                    <img src={bulbasaur} />
                        <h3>CHARIZARD</h3>
                        <h3>L50</h3>
                    </li>
                    <li id="007">
                    <img src={bulbasaur} />
                        <h3>SQUIRTLE</h3>
                        <h3>L50</h3>
                    </li>
                    <li id="008">
                    <img src={bulbasaur} />
                        <h3>WARTORTLE</h3>
                        <h3>L50</h3>
                    </li>
                    <li id="009">
                    <img src={bulbasaur} />
                        <h3>BLASTOISE</h3>
                        <h3>L50</h3>
                    </li>
                    <li id="010">
                    <img src={bulbasaur} />
                        <h3>CATERPIE</h3>
                        <h3>L50</h3>
                    </li>
                    <li id="011">
                    <img src={bulbasaur} />
                        <h3>METAPOD</h3>
                        <h3>L50</h3>
                    </li>
                    <li id="012">
                    <img src={bulbasaur} />
                        <h3>BUTTERFREE</h3>
                        <h3>L50</h3>
                    </li>
            </ul>
        </div>   
    )
}

export default Rentallist ;