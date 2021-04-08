import './PoopAnim.css';
import { useEffect } from 'react';
import $ from 'jquery';


function PoopAnim(props) {


    useEffect( () => {
        $(window).on('scroll', () => {
            if(window.pageYOffset > props.scrollHide){ 
                $("#"+props.id).hide()
            }
            else{
                $("#"+props.id).show();
            }
        })
        // eslint-disable-next-line 
    } , [])

    const poopStyles = {
        top: props.top,
        marginLeft: props.marginLeft,
        background: `url(http://www.mikimottes.com/images/illustrations/poop.png) no-repeat ${props.imageOffset} 0`,
        transformOrigin: `${props.originX} ${props.originY}`
    }  


    return (
        <div id={props.id} className="poop" style={poopStyles}></div>
    );
}


export default PoopAnim;