import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Backdrop from "../../Common/Backdrop/Backdrop";

import "./Overlay.css";

const Overlay = (props) => {
  return (
    <>
      <Backdrop clicked={props.toggleOverlay} />
      <div className="overlay">
        <div className="overlay-header">
          <div className="overlay-header-left">
            <p>previous project</p>
          </div>
          <div className="overlay-header-center">
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
            intreval={null}
            fade={true}
            indicators={false}
            nextIcon={
              <div
                style={{
                  width: "115px",
                  height: "115px",
                  background:
                    "url('http://www.mikimottes.com/images/lb_next.png') no-repeat",
                }}
              ></div>
            }
            prevIcon={
              <div
                style={{
                  width: "115px",
                  height: "115px",
                  background:
                    "url('http://www.mikimottes.com/images/lb_previous.png') no-repeat",
                }}
              ></div>
            }
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://www.mikimottes.com/images/samples/cement_cats_01_big.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://www.mikimottes.com/images/samples/cement_cats_04_big.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Overlay;
