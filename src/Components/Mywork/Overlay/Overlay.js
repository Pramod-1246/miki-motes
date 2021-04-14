import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Backdrop from "../../Common/Backdrop/Backdrop";
import CarouselIcon from "./CarouselIcon/CarouselIcon";

import "./Overlay.css";

const data = [
  {
    title: "The Cement Cats",
    para:
      "The cement cats are 100% handmade of pure cement, they just sit in their litter box with a small piece of poop.",
    images: [
      "http://www.mikimottes.com/images/samples/cement_cats_01_big.jpg",
      "http://www.mikimottes.com/images/samples/cement_cats_02_big.jpg",
      "http://www.mikimottes.com/images/samples/cement_cats_04_big.jpg",
    ],
  },
  {
    title: "Simple Happy Kitchen",
    para:
      "Simple Happy Kitchen is a book which uses fun and friendly illustrations, infographics and humor to present plant-based nutrition.",
    images: [
      "http://www.mikimottes.com/images/samples/simple_happy_kitchen_protein_sources_03_big.jpg",
      "http://www.mikimottes.com/images/samples/simple_happy_kitchen_water_consumption_farm_04_big.jpg",
      "http://www.mikimottes.com/images/samples/simple_happy_kitchen_vegan_iron_sources_05_big.jpg",
      "http://www.mikimottes.com/images/samples/simple_happy_kitchen_plant_based_plate_vegan_08_big.jpg",
    ],
  },
];

const Overlay = (props) => {
  const [index, setIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setSlideIndex(selectedIndex);
  };

  const togglePrev = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return data.length - 1;
      }
      return prevIndex - 1;
    });
    setSlideIndex(0);
  };

  const toggleNext = () => {
    setIndex((prevIndex) => {
      if (prevIndex === data.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
    setSlideIndex(0);
  };

  return (
    <>
      <Backdrop clicked={props.toggleOverlay} />
      <div className="overlay">
        <div className="overlay-header">
          <div className="overlay-header-left">
            <p onClick={togglePrev}>previous project</p>
          </div>
          <div className="overlay-header-center">
            <img
              src="http://www.mikimottes.com/images/lb_title.png"
              alt="header"
            />
            <h3>{data[index].title}</h3>
            <p>{data[index].para}</p>
          </div>
          <div className="overlay-header-right">
            <div className="close-icon" onClick={props.toggleOverlay}></div>
            <p onClick={toggleNext}>next project</p>
          </div>
        </div>
        <div className="overlay-body">
          <Carousel
            activeIndex={slideIndex}
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
            {data[index].images.map((item) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100" src={item} alt="slide" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className="overlay-bottom">
          {data[index].images.map((item, idx) => {
            return (
              <div
                className="overlay-bottom-img"
                onClick={(e) => handleSelect(idx, e)}
              >
                <img src={item} alt={`${idx}`} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Overlay;
