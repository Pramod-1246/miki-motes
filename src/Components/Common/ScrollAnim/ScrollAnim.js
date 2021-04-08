import $ from 'jquery';

export default class ScrollAnim{
    constructor(top, id, animStartPosition, delta, invert) {
        this.initialtop = top;
        this.topPosition = top;
        this.id = id;
        this.animStartPosition = animStartPosition;
        this.delta = delta;
        this.initialPositionAbs = $(window).scrollTop();
        this.initialPosition = this.initialPositionAbs;
        this.invert = invert;
    }

    scrollAnimate() {
        const anim = $(`#${this.id}`);
        let currentPosition;
        if(window.pageYOffset < this.animStartPosition){
            currentPosition = $(window).scrollTop();
            if(currentPosition > this.initialPosition){
                this.invert ? this.topPosition += this.delta : this.topPosition -= this.delta;
            }
            else {
                this.invert ? this.topPosition -= this.delta : this.topPosition += this.delta;
            }
            
            if(currentPosition === this.initialPositionAbs){
                this.topPosition = this.initialtop;
            }
            anim.css({top:this.topPosition+"px"})
        }


        this.initialPosition = currentPosition;
    }
}

// const ScrollAnim = (top, id, animStartPosition, delta) => {
//     let topPosition = top;
//     let initialPosition = $(window).scrollTop();

//     const  scrollAnimation = () => {
//         const anim = $(`#${id}`);
//         let currentPosition;
//         if(window.pageYOffset < animStartPosition){
//             let delta = delta;
//             currentPosition = $(window).scrollTop();
//             if(currentPosition > initialPosition){
//                 topPosition -= delta
//             }
//             else {
//                 topPosition += delta
//             }
//             anim.css({top:topPosition+"px"})

//         }
//         initialPosition = currentPosition;
//     }
// }

// export default ScrollAnim;
