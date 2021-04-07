import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Backdrop from "../../Common/Backdrop/Backdrop";
import CarouselIcon from "./CarouselIcon/CarouselIcon";

import "./Overlay.css";

const data = [
  { imgSrc: "http://www.mikimottes.com/images/samples/cement_cats_01_big.jpg" },
  { imgSrc: "http://www.mikimottes.com/images/samples/cement_cats_02_big.jpg" },
  { imgSrc: "http://www.mikimottes.com/images/samples/cement_cats_04_big.jpg" },
];

const Overlay = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Backdrop clicked={props.toggleOverlay} />
      <div className="overlay">
        <div className="overlay-header">
          <div className="overlay-header-left">
            <p>previous project</p>
          </div>
          <div className="overlay-header-center">
            <img
              src="http://www.mikimottes.com/images/lb_title.png"
              alt="header"
            />
            <h3>The Cement Cats</h3>
            <p>
              The cement cats are 100% handmade of pure cement, they just sit in
              their litter box with a small piece of poop. You can get them at{" "}
              <a href="/#">Madafim</a> and <a href="/#">Asufa</a> shop.
            </p>
          </div>
          <div className="overlay-header-right">
            <div className="close-icon" onClick={props.toggleOverlay}></div>
            <p>next project</p>
          </div>
        </div>
        <div className="overlay-body">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            intreval={null}
            fade={true}
            indicators={false}
            nextIcon={
              <CarouselIcon
                src="http://www.mikimottes.com/images/lb_next.png"
                iconType="next"
              />
            }
            prevIcon={
              <CarouselIcon
                src="http://www.mikimottes.com/images/lb_previous.png"
                iconType="prev"
              />
            }
          >
            {data.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.imgSrc}
                    alt="slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className="overlay-bottom">
          {data.map((item, idx) => {
            return (
              <div
                className="overlay-bottom-img"
                onClick={(e) => handleSelect(idx, e)}
              >
                <img src={item.imgSrc} alt={`${idx}`} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Overlay;
