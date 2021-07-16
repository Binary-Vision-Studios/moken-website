import React from "react";
import Text from "../Text";
import "./index.scss";
import Title from "../Title";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ImageTitleSubDescList = ({
  title = "",
  subtitle = "",
  subtitleClassName = "",
  description = "",
  list = [],
  imgURL = "",
  listClassName = "",
  containerClassName = "",
}) => {
  const { isMobile } = useWindowDimensions();
  return (
    <div
      className={`image-title-sub-desc-list-container ${containerClassName}`}
    >
      <img
        data-aos="fade-in"
        className={"image-title-sub-desc-list-image"}
        src={imgURL}
      />
      <div>
        <Text
          className={"image-title-sub-desc-list-title"}
          type={"kSemiBold"}
          size={16}
          mobSize={14}
        >
          {title}
        </Text>
        <Text
          size={50}
          className={`image-title-sub-desc-list-subtitle ${subtitleClassName}`}
          animationType={"fade-in"}
          mobSize={35}
          type={"kBold"}
        >
          {subtitle}
        </Text>
        {description ? (
          <Text
            size={20}
            mobSize={16}
            textStyles={{ lineHeight: isMobile ? "26px" : "30px" }}
            animationType={"fade-in"}
            className={"image-title-sub-desc-list-description"}
            type={"kLight"}
          >
            {description}
          </Text>
        ) : null}
        {list.map((listData, index) => {
          return (
            <div
              key={"ImageTitleSubDescList" + index}
              className={`image-title-sub-desc-list-item ${listClassName}`}
            >
              <Text
                size={14}
                animationType={"fade-in"}
                type={"kSemiBold"}
                textStyles={{ lineHeight: isMobile ? "20px" : "20px" }}
                className={"image-title-sub-desc-list-item-title"}
              >
                {listData.title}
              </Text>
              <Text
                size={20}
                animationType={"fade-in"}
                textStyles={{ lineHeight: isMobile ? "26px" : "30px" }}
                mobSize={16}
                type={"kLight"}
              >
                {listData.subtitle}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageTitleSubDescList;
