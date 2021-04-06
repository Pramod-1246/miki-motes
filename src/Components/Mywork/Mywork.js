import React, { useEffect, useState } from "react";
import "./Mywork.css";
import $ from 'jquery';
import {data} from './Data'
export default function Mywork() {
  const Reset=()=>{
    if (window.innerWidth < 950) {
      setstate(data["0"].slice(0, 8));
    } else if (window.innerWidth < 1240) {
      setstate(data["0"].slice(0, 12));
    } else {
      setstate(data["0"].slice(0, 16));
    }
  }
  const [state, setstate] = useState(data["0"]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    Reset()
    window.onresize = function(){
      Reset()
    };
    $(window).scroll(function() {
      if($(window).scrollTop()>200){
        document.getElementById('backhills').style.display='none'
      }else{
        document.getElementById('backhills').style.display='block'
      }
    });
    
  },[]);
  const leftClick = () => {
    if (index === 0) return;
    setstate([]);
    setTimeout(() => {
      setstate(data[index - 1]);
      Reset()
    }, 500);
    setIndex(index - 1);
    $('html, body').animate({
        scrollTop: $("#scroll_view").offset().top
    }, 500);
  };
  const rightClick = () => {
    if (index === 3) return;
    setstate([]);
    setTimeout(() => {
      setstate(data[index + 1]);
      Reset()
    }, 500);
    setIndex(index + 1);
    $('html, body').animate({
    scrollTop: $("#scroll_view").offset().top
    }, 500);
  };
  return (
    <section className="myworkSection">
      <div id="scroll_view"></div>
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
      ;
      <div className="mywork-btn">
        <div
          className={`mywork-btn-left ${
            index === 0 ? "mywork-btn-left--disable" : null
          }`}
          onClick={leftClick}
        ></div>
        <div
          className={`mywork-btn-right ${
            index === 3 ? "mywork-btn-right--disable" : null
          }`}
          onClick={rightClick}
        ></div>
      </div>
    </section>
  );
}
