import React from 'react'
import './Animations.css'
import Hat from './Hat/Hat'
import ImageAnim from '../Common/ImageAnim/ImageAnim'
import Anime from './Left pray/Anime'
import Shopstarts from "./Shopstarts/Shopstars";
import BigbushLefteye from "./BigbushLefteye/BigbushLefteye";
import BigbushRighteye from "./BigbushRighteye/BigbushRighteye";
import PeepingEyes from "./PeepingEyes/PeepingEyes";
import HarpHands from "./HarpHands/HarpHands";
import ShopHands from "./ShopHands/ShopHands"
import Boats from './Boats/Boats';
import PoopAnimation from './PoopAnimation/PoopAnimation';
import CreaturesAnimations from './CreaturesAnimations/CreaturesAnimations';
import FallingCreatureAnimation from './FallingCreatureAnimation/FallingCreatureAnimation'

export default function Animations() {
  return (
    <>
      <div className="light"></div>
      <ImageAnim
        name="sea"
        left="0"
        width="100%"
        height="355px"
        bottom="0"
        zIndex="2"
        background="url(http://www.mikimottes.com/images/illustrations/sea.png)"
      />
      <ImageAnim
        name="worm_behind"
        top="2946px"
        zIndex="10"
        width="138px"
        height="61px"
        marginLeft="600px"
        background="url(http://www.mikimottes.com/images/illustrations/all.png) no-repeat -2512px 0"
      />
      <ImageAnim
        name="worm_cover"
        top="2985px"
        width="183px"
        height="109px"
        marginLeft="560px"
        background="url(http://www.mikimottes.com/images/illustrations/all.png) no-repeat -2660px 0"
      />
      <Hat />
      <Shopstarts />
      <ImageAnim
        name="pot_cover"
        top="1826px"
        marginLeft="-775px"
        width="74px"
        height="138px"
        background="url(http://www.mikimottes.com/images/illustrations/all.png) no-repeat -1332px 0"
      />
      <PoopAnimation />
      <BigbushLefteye />
      <BigbushRighteye />
      <PeepingEyes />
      <HarpHands />
      <ShopHands />
      <Anime />
      <Boats />
      <CreaturesAnimations/>
      <FallingCreatureAnimation />
      <ImageAnim 
        name="tunnel_cover"
        position="absolute"
        top="736px"
        zIndex="12"
        marginLeft="-765px"
        width="36px"
        height="96px"
        background="url(http://www.mikimottes.com/images/illustrations/all.png) no-repeat -2277px 0"
      />

      {/* #oAnimations .tunnel_cover{
	position:absolute;
	top:736px;
	left:50%;
	z-index:12;
	margin-left:-765px;
	width:36px;
	height:96px;
	background:url(../images/illustrations/tunnel_cover.png);
	background:url(../images/illustrations/all.png) no-repeat -2277px 0;
}
position: props.position || `absolute`,
        top: props.top || `none`,
        bottom:props.bottom || 'none',
        left: props.left || '50%',
        zIndex: props.zIndex || 12,
        marginLeft: props.marginLeft,
        width: props.width,
        height: props.height,
        background: props.background,

 */}

    </>
  );
}