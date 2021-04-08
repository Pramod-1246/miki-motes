import React from 'react'
import './Animations.css'
import Hat from './Hat/Hat'
import ImageAnim from '../Common/ImageAnim/ImageAnim'
import Anime from './LeftPray/Anime'
import Shopstarts from "./Shopstarts/Shopstars";
import BigbushLefteye from "./BigbushLefteye/BigbushLefteye";
import BigbushRighteye from "./BigbushRighteye/BigbushRighteye";
import PeepingEyes from "./PeepingEyes/PeepingEyes";
import HarpHands from "./HarpHands/HarpHands";
import ShopHands from "./ShopHands/ShopHands"
import Boats from './Boats/Boats';
import PoopAnim from '../Common/PoopAnim/PoopAnim';
import { poopAnimDataArray } from '../Common/PoopAnim/PoopAnim'; 
import RightPray from './RightPray/RightPray'
import Cucumber from './Cucumber/Cucumber'
import Sos from './Sos/Sos'

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
      {
            poopAnimDataArray.map( 
                poopAnimData => <PoopAnim 
                                    id={poopAnimData.id}
                                    top={poopAnimData.top} 
                                    marginLeft={poopAnimData.marginLeft} 
                                    imageOffset={poopAnimData.imageOffset}
                                    originX={poopAnimData.originX}
                                    originY={poopAnimData.originY}
                                    poopAnimDirectionClass={poopAnimData.poopAnimDirectionClass}
                                    scrollHide={poopAnimData.scrollHide}
                                />
                )
        }
      <BigbushLefteye />
      <BigbushRighteye />
      <PeepingEyes />
      <HarpHands />
      <ShopHands />
      <Anime />
      <Boats />
      <RightPray />
      <Cucumber />
      <Sos />
    </>
  );
}