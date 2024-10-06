
import './rental-box-sm.css' ;
import { rentalData } from '../../Data' ;
import bulbasaur from '../icon-charizard.png' ;

function Rentalboxsm() {


    return (

    <li  id={rentalData.number} >
        <img src={bulbasaur} />
        <h3>{rentalData.name}</h3>
        <h3>L50</h3>
    </li>

    )
}

export default Rentalboxsm ;