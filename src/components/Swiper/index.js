import React, {useEffect, useMemo, useRef, useState} from "react";
import SwiperCore, { Navigation, Virtual, Autoplay } from 'swiper';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import ArrowUpRight from "../../images/arrow-up-right-white.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./index.scss";

SwiperCore.use([Navigation, Virtual, Autoplay]);


const defaultBreakpoints ={
    // when window width is >= 320px
    '0': {
        slidesPerView: 1,

    },

    '601': {
        slidesPerView: 1.5,
    },
    '650': {
        slidesPerView: 2,
    },
    // when window width is >= 480px
    '800': {
        slidesPerView: 2.5,
    },
    '1000': {
        slidesPerView: 3,
    },
    // when window width is >= 640px
    '1380': {
        slidesPerView: 3.5,
    },
    '1600': {
        slidesPerView: 4,
    },
    '1770': {
        slidesPerView: 4.5,
    },

    '1970': {
        slidesPerView: 5,
    },




};

const Swiper = ({ swiperData = [], Component, containerClassName = '',
                    slidesPerView = 4,
                    virtual = false,
                    spaceBetween = 0,
                    breakpoints =defaultBreakpoints,
                    withoutArrows = false,
                    centeredSlides = false,
                    additionalComponentOptions = {Component: () => null, position: ''},
                    containerProps = {},
                    isSwiperHover,
                    ...rest
                }) => {
    const { isMobile, isMiddleBiggest, isMiddleSmallest } = useWindowDimensions();

    const [isActiveIndex, setIsActiveIndex] = useState(0)

    const [isTouching, setIsTouching] = useState(false);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const swiperRef = useRef(null);

    // const swiper = new Swiper('.swiper-container', {
    //
    //     direction: 'vertical',
    //     mousewheelControl: true,
    //     slidesPerView: 1,
    //     // freeMode: true,
    //     // freeModeSticky: true
    // });



    const onDragStart = (e) => {
        console.log('onDragStart', e);

    }



    const onDragEnd = (e) => {
        console.log('onDragEnd', e);
    }


    return (
      <div className={`swiper-component-container ${isTouching ? 'grabbing' : ''} ${containerClassName}`} {...containerProps}>
          <SwiperComponent
              shouldSwiperUpdate
              ref={swiperRef}
                  spaceBetween={spaceBetween}
              centeredSlides={centeredSlides}
                  // virtual={virtual}
                  breakpoints={breakpoints}
                  slidesPerView={slidesPerView}
                  wrapperTag={'ul'}
                   navigation={{
                       prevEl: prevRef.current ? prevRef.current : undefined,
                       nextEl: nextRef.current ? nextRef.current : undefined,
                   }}
                   onInit={(swiper) => {
                       swiper.params.navigation.prevEl = prevRef.current;
                       swiper.params.navigation.nextEl = nextRef.current;
                       swiper.navigation.update();

                   }}
                  // onSlideChange={onDragStart}
                  // onReachEnd={onDragEnd}
                  // onBeforeSlideChangeStart={() => console.log('onBeforeSlideChangeStart')}
                  onTouchStart={() => setIsTouching(true)}
                  onTouchEnd={() => setIsTouching(false)}
                  {...rest}


          >
              {/*{*/}
              {/*    additionalComponentOptions ? additionalComponentOptions.Component() : null*/}
              {/*}*/}
                  {swiperData.map((option, index) => {
                      return (
                          <SwiperSlide wrapperTag={'div'} tag={'section'} key={`Slide content ${index + 1}`} virtualIndex={index}>
                              {({ isActive }) => (
                                    <Component
                                      {...option}
                                      componentIndex={index}
                                      setIsActiveIndex={setIsActiveIndex}
                                      isActiveIndex={index === isActiveIndex} key={"explore " + index} cursor={'grab'} />

                              )}
                          </SwiperSlide>
                      )
                  })}

              {!isMobile ? <SwiperSlide wrapperTag={'div'}>
                  <div style={{width: 100}}/>
              </SwiperSlide> : null}

              {!withoutArrows ? <>
                  <div ref={prevRef} className="cursor-pointer button-left">
                      <img
                          src={ArrowUpRight}
                      />
                  </div>
                  <div ref={nextRef} className="cursor-pointer button-right">
                      <img
                          src={ArrowUpRight}
                      />
                  </div>
              </> : null}

          </SwiperComponent>

          {/*<div className={'right-side'}/>*/}

      </div>

  );
};
export default Swiper;
