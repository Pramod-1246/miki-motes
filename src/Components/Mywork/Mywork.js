import React, { useEffect, useState } from "react";
import "./Mywork.css";
const data = {
  0: [
    {
      image: "http://www.mikimottes.com/images/hp_thumbnails/t_trioplastic.gif",
      title: "Simple",
      subtitle: "Black-blue Totems",
    },
    {
      image:
        "http://www.mikimottes.com/images/hp_thumbnails/t_simple_happy_kitchen_vegan_book.jpg",
      title: "Simply Happy kitchen",
      subtitle: "Black-blue Totems",
    },
    {
      image:
        "http://www.mikimottes.com/images/hp_thumbnails/t_vegan_charts.jpg",
      title: "Vegan plant-based charts",
      subtitle: "Black-blue Totems",
    },
    {
      image:
        "http://www.mikimottes.com/images/hp_thumbnails/t_dan_ariely_irrational_game.jpg",
      title: "Trioplastic",
      subtitle: "Black-blue Totems",
    },
    {
      image:
        "http://www.mikimottes.com/images/hp_thumbnails/t_dan_ariely_irrational_game.jpg",
      title: "Irrational Game / Dan Ariely",
      subtitle: "Black-blue Totems",
    },
    {
      image:
        "http://www.mikimottes.com/images/hp_thumbnails/t_math_second_iphone_game_land_of_venn.gif",
      title: "The Land of Venn / Numeric Storms",
      subtitle: "Black-blue Totems",
    },
    {
      image:
        "http://www.mikimottes.com/images/hp_thumbnails/t_dorot_package.jpg",
      title: "Pasta Sauce Package Illustration",
      subtitle: "Black-blue Totems",
    },
    {
      image: "http://www.mikimottes.com/images/hp_thumbnails/t_cement_cat.jpg",
      title: "Trioplastic",
      subtitle: "Black-blue Totems",
    },
    {
      image:
        "http://www.mikimottes.com/images/hp_thumbnails/t_math_iphone_game_land_of_venn.gif",
      title: "Iphone",
      subtitle: "Black-blue Totems",
    },
    {
      image: "http://www.mikimottes.com/images/hp_thumbnails/t_trioplastic.gif",
      title: "Trioplastic",
      subtitle: "Black-blue Totems",
    },
    {
      image: "http://www.mikimottes.com/images/hp_thumbnails/t_cement_cat.jpg",
      title: "charts",
      subtitle: "Black-blue Totems",
    },
    {
      image: "http://www.mikimottes.com/images/hp_thumbnails/t_trioplastic.gif",
      title: "Trioplastic",
      subtitle: "Black-blue Totems",
    },
    {
      image:
        "http://www.mikimottes.com/images/hp_thumbnails/t_green_black_print.gif",
      title: "Pasta",
      subtitle: "Black-blue Totems",
    },
    {
      image:
        "http://www.mikimottes.com/images/hp_thumbnails/t_dorot_package.jpg",
      title: "Trioplastic",
      subtitle: "Black-blue Totems",
    },
    {
      image:
        "http://www.mikimottes.com/images/hp_thumbnails/t_green_black_print.gif",
      title: "Trioplastic",
      subtitle: "Black-blue Totems",
    },
    {
      image:
        "http://www.mikimottes.com/images/hp_thumbnails/t_vegan_charts.jpg",
      title: "Pasta",
      subtitle: "Black-blue Totems",
    },
  ],
};
export default function Mywork() {
  const [state, setstate] = useState(data["0"]);
  useEffect(() => {
    window.onresize = function (e) {
      if (e.target.innerWidth < 950) {
        setstate(data["0"].slice(0, 8));
      } else if (e.target.innerWidth < 1240) {
        setstate(data["0"].slice(0, 12));
      } else {
        setstate(data["0"].slice(0, 16));
      }
    };
  });
  const leftClick = () => {
    setstate(data["0"].slice(0, 6 + Math.floor(Math.random() * 10)));
  };
  const rightClick = () => {
    setstate(data["0"].slice(0, 6 + Math.floor(Math.random() * 10)));
  };
  return (
    <section className="myworkSection">
      <div className="grid_items">
        {state.map((d, i) => {
          if (i === 0 || i === 1) {
            return (
              <div className="grid_item text-center new" key={i}>
                <div className="grid_img">
                  <img src={d.image} alt={d.title} />
                </div>
                <h3 className="grid_title mt-2">{d.title}</h3>
                <h4 className="grid_subtitle">{d.subtitle}</h4>
              </div>
            );
          }
          return (
            <div className="grid_item text-center" key={i}>
              <div className="grid_img">
                <img src={d.image} alt={d.title} />
              </div>
              <h3 className="grid_title mt-2">{d.title}</h3>
              <h4 className="grid_subtitle">{d.subtitle}</h4>
            </div>
          );
        })}
      </div>
      <div className="mywork-btn">
        <div className="mywork-btn-left" onClick={leftClick}></div>
        <div className="mywork-btn-right" onClick={rightClick}></div>
      </div>
    </section>
  );
}