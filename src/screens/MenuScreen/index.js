import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import menuScreenTopOptions from "./components/MenuScreenTopColumn/menu-screen-top-column-options";
import menuScreenBottomOptions from "./components/MenuScreenBottomColumn/menu-screen-bottom-column-options";
import MenuScreenTopColumn from "./components/MenuScreenTopColumn";
import MenuScreenBottomColumn from "./components/MenuScreenBottomColumn";
import "./index.scss";
import footerOptions from "../../components/Footer/footer-options";
import Burger from "../../components/Header/components/Burger";
import { useHistory } from "react-router-dom";
import HeaderMobile from "../../components/Header/components/HeaderMobile";

const { menuOption, socialsMedia, socialsMediaWhite, styles } = footerOptions;

const MenuScreen = (props) => {
  const { isMobile } = useWindowDimensions();
  let history = useHistory();
  console.log('MenuScreen --->', window.innerWidth);
  return (
    <div className={'menu-screen-main-container'}>
        <HeaderMobile {...props} containerClassName={'header-mobile-container'} />
        <div className={'menu-screen-top-container'}>
          <div className={"menu-screen-container"}>
            <div
                className={'burger-container'}
                style={{
                  display: "flex",
                  // justifyContent: "flex-end",
                  // paddingRight: "6.3vw",
                  // paddingTop: "4vw",
                }}
            >
              {/*<div/>*/}
              <Burger
                  isOpen
                  type={"white"}
                  setIsOpen={() => {
                    history.goBack();
                  }}
              />
              {/*<Burger setIsOpen={setIsOpen} isOpen={isOpen} type={'white'}/>*/}
            </div>
            <div
                data-aos="fade-up"
                className={"menu-screen-top-columns-container"}
            >
              {menuScreenTopOptions.columns.map(
                  (options, index) => {
                    return (
                        <MenuScreenTopColumn
                            key={"MenuScreenTopColumn" + index}
                            {...options}
                            isLast={index === menuScreenTopOptions.columns.length - 1}
                        />
                    );
                  }
              )}
            </div>
            <div
                data-aos="fade-up"
                className={"menu-screen-top-column-divider"}
            />

            <div className={"menu-screen-bottom-columns-container"}>
              <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className={"menu-screen-bottom-container"}
              >
                {menuScreenBottomOptions.columns.map(
                    (props, index) => {
                      return (
                          <MenuScreenBottomColumn
                              key={"MenuScreenBottomColumn" + index}
                              isLast={index === menuScreenBottomOptions.columns.length - 1}
                              {...props}
                          />
                      );
                    }
                )}
              </div>

            </div>
          </div>
            <div className={'social-main-container'}>
          <div
              data-aos="fade-up"
              data-aos-delay="400"
              className={"socials-header-menu-container"}
          >
            {socialsMedia.map(({ image, link }, index) => {
              return (
                  <a key={"socials header" + index} href={link} target={'_blank'}>
                    <img src={image} alt={"social"} />
                  </a>
              );
            })}
          </div>
        </div>
        </div>
    </div>
  );
};

export default MenuScreen;
