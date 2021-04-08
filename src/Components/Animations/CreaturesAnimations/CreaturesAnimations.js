import './CreaturesAnimations.css';
import ScrollAnim from '../../Common/ScrollAnim/ScrollAnim';
import $ from 'jquery';

const CreaturesAnimations = () => {
    let pinkAnim = new ScrollAnim(1080, "pink-creature", 636, 0.75, false)
    let leftFarAnim = new ScrollAnim(1713, "creature-left-far", 800, 0.5 , true)
    let leftNearAnim = new ScrollAnim(1766, "creature-left-near", 800, 0.5, true)
    let rightFarAnim = new ScrollAnim(1575, "creature-right-far", 800, 0.5, true )
    let wormAnim = new ScrollAnim(2785, "worm", 10000, 2, false)


    $(window).on('scroll', () => {
        pinkAnim.scrollAnimate();
        leftFarAnim.scrollAnimate();
        leftNearAnim.scrollAnimate();
        rightFarAnim.scrollAnimate();
        wormAnim.scrollAnimate();
    })

    return  <>
                <div id="pink-creature"></div>
                <div id="creature-left-far"></div>
                <div id="creature-left-near"></div>
                <div id="creature-right-far"></div>
                <div id="worm"></div>
            </>


}

export default CreaturesAnimations;