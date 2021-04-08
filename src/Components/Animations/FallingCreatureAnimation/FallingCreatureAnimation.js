import './FallingCreatureAnimation.css';

import { useEffect } from "react";
import $ from 'jquery';

function FallingCreatureAnimation () {

    useEffect( () => {
        $(window).on('scroll', () => {
            if(window.pageYOffset < 1400){ 
                $("#falling_creature").addClass("clsFixed")
            }
            else{
                $("#falling_creature").removeClass("clsFixed");
            }
        })
        // eslint-disable-next-line 
    } , [])

    return (
        <div id="falling_creature"></div>
    );
}

export default FallingCreatureAnimation;