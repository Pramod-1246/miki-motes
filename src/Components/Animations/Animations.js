import React from 'react'
import './Animations.css'
import AppleAnimation from './AppleAnimation/AppleAnimation';
import BabySitter from './Babysitter/Babysitter';
import Cateyes from './Cateyes/Cateyes';
import CokeGas from './CokeGas/CokeGas';
import DovesEating from './DovesEating/DovesEating';
import MermaidEye from './MermaidEye/MermaidEye';
import Oldman from './Oldman/Oldman';
import RabbitEarsAnimation from './RabbitEarsAnimation/RabbitEarsAnimation';
import RopeAnimation from './RopeAnimation/RopeAnimation';
import SwingEyes from './SwingEyes/SwingEyes';
import Tapoodhand from './Tapoodhand/Tapoodhand';
import TreeDoveEyes from './TreeDoveEyes/TreeDoveEyes';
import TreeDoveWing from './TreeDoveWing/TreeDoveWing';
import VeryOldManAnimation from './VeryOldManAnimation/VeryOldManAnimation';
import Waitingpoop from './Waitingpoop/Waitingpoop';
import WaterPoo from './WaterPoo/WaterPoo';
import Hat from './Hat/Hat'
import ImageAnim from '../Common/ImageAnim/ImageAnim'
import Anime from './LeftPray/Anime'
import Shopstarts from "./Shopstarts/Shopstars";
import BigbushLefteye from "./BigbushLefteye/BigbushLefteye";
import BigbushRighteye from "./BigbushRighteye/BigbushRighteye";
import PropellorLeft from "./PropellorLeft/PropellorLeft";
import PropellorRight from "./PropellorRight/PropellorRight";
import PeepingEyes from "./PeepingEyes/PeepingEyes";
import HarpHands from "./HarpHands/HarpHands";
import Papinoy from "./Papinoy/Papinoy";
import DuckFaceEye from "./DuckFaceEye/DuckFaceEye";
import ShopEyes from "./ShopEyes/ShopEyes";
import ShopHands from "./ShopHands/ShopHands"
import Boats from './Boats/Boats';
import PoopAnimation from './PoopAnimation/PoopAnimation';
import CreaturesAnimations from './CreaturesAnimations/CreaturesAnimations';
import FallingCreatureAnimation from './FallingCreatureAnimation/FallingCreatureAnimation'
import RightPray from './RightPray/RightPray'
import Cucumber from './Cucumber/Cucumber'
import Sos from './Sos/Sos'
import Bulbs from './Bulbs/Bulbs'
import Farting from './Farting/Farting'
import Swinglegs from './Swinglegs/Swinglegs'
import Flies from './FLies/Flies'
import SellerEyes from './SellerEyes/SellerEyes'
import HandBeer from './HandBeer/HandBeer'
import Mustache from './Mustache/Mustache'
import CashierTainAnimation from "./CashierTailAnimation/CashierTainAnimation";
import Shnoozleeye from "./Shnoozleeye/Shnoozleeye";
import UnderYellowEye from "./UnderYellowEye/UnderYellowEye";

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
      <Boats />
      <PoopAnimation />
      <BigbushLefteye />
      <BigbushRighteye />
      <PeepingEyes />
      <HarpHands />
      <ShopHands />
      <PropellorLeft />
      <Papinoy />
      <PropellorRight />
      <DuckFaceEye />
      <ShopEyes />
      <Anime />
      <RightPray />
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
      <Cucumber />
      <Sos />
      <Bulbs />
      <Swinglegs/>
      <Farting/>
      <Flies />
      <SellerEyes />
      <HandBeer />
      <Mustache />
      <AppleAnimation />
      <BabySitter />
      <Cateyes />
      <CokeGas />
      <DovesEating />
      <MermaidEye />
      <Oldman />
      <RabbitEarsAnimation />
      <RopeAnimation />
      <SwingEyes />
      <Tapoodhand />
      <TreeDoveEyes />
      <TreeDoveWing />
      <VeryOldManAnimation />
      <Waitingpoop />
      <WaterPoo />
      <Shnoozleeye/>
      <UnderYellowEye />
      <CashierTainAnimation />
    </>
  );
}