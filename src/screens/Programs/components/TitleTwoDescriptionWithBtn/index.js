import React from "react";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import "./index.scss";
import Title from "../../../../components/Title";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const TitleTwoDescriptionWithBtn = ({
  title = "",
  firstText = "",
  secondText = "",
  onClick = () => {},
  mainTitle = "",
}) => {
  const { isMobile } = useWindowDimensions();
  return (
    <>
      <Title title={mainTitle} className={"labs-overview-title"} />

      <section className={"labs-overview-container"}>
        <Text
          size={50}
          // size={55}
          animationType={"fade-in"}
          mobSize={35}
          type={"kBold"}
          className={"labs-overview-info-block-text"}
        >
          {title}
        </Text>
        <div className={"labs-overview-info-block"}>
          <Text
            type={"kLight"}
            className={"labs-overview-info-block-first-text"}
            size={20}
            animationType={"fade-in"}
            mobSize={16}
            textStyles={{ lineHeight: isMobile ? "26px" : "30px"}}
          >
            {firstText}
          </Text>
          <div>
            <Text
              type={"kLight"}
              className={"labs-overview-info-block-second-text"}
              mobSize={16}
              animationType={"fade-in"}
              textStyles={{ lineHeight: isMobile ? "26px" : "30px"}}
              size={20}
            >
              {secondText}
            </Text>
            <Button
              title={"APPLY TO INCUBATOR"}
              onClick={onClick}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TitleTwoDescriptionWithBtn;
