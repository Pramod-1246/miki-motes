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

export const poopAnimDataArray = [
    {
        id:"poop1",
        top:"400px",
        marginLeft:"745px",
        imageOffset:"-60px",
        originX:"10px",
        originY:"5px",
        poopAnimDirectionClass:".poop-anim-right",
        scrollHide:220

    },
    {
        id:"poop2",
        top:"380px",
        marginLeft:"745px",
        imageOffset:"-45px",
        originX:"10px",
        originY:"5px",
        poopAnimDirectionClass:".poop-anim-left",
        scrollHide:240
    },
    {
        id:"poop3",
        top:"420px",
        marginLeft:"747px",
        imageOffset:"-30px",
        originX:"10px",
        originY:"5px",
        poopAnimDirectionClass:".poop-anim-right",
        scrollHide:200
    },
    {
        id:"poop4",
        top:"470px",
        marginLeft:"748px",
        imageOffset:"-15px",
        originX:"9px",
        originY:"5px",
        poopAnimDirectionClass:".poop-anim-left",
        scrollHide:140
    },
    {
        id:"poop5",
        top:"500px",
        marginLeft:"750px",
        imageOffset:"0",
        originX:"6px",
        originY:"5px",
        poopAnimDirectionClass:".poop-anim-right",
        scrollHide:116
    }
];

export default PoopAnim;