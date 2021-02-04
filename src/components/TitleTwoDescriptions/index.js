import React from "react";
import Text from "../Text";
import "./index.scss";
import Title from "../Title";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const TitleTwoDescriptions = ({
  mainTitle = "",
  title = "",
  firstDescription = "",
  secondDescription = "",
}) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"title-two-descriptions-main-container"}>
      <Title
        title={mainTitle}
        className={"title-two-descriptions-main-title"}
      />

      <div className={"title-two-descriptions-container"}>
        <Text
          animationType={"fade-up"}
          // size={'3.4vw'}
          size={55}
          mobSize={35}
          // textStyles={{lineHeight: '0px'}}
          type={"extraLight"}
        >
          {title}
        </Text>
        <div className={"community-capabilities-container"} data-aos="fade-up">
          <Text
            // size={'1.25vw'}
            size={20}
            animationType={"fade-in"}
            // textStyles={{ lineHeight: isMobile ? "26px" : "2.2vw" }}
            textStyles={{ lineHeight: "35px" }}
            mobSize={16}
            type={"light"}
          >
            {firstDescription}
          </Text>
          <Text
            size={20}
            // size={'1.25vw'}
            animationType={"fade-in"}
            // textStyles={{ lineHeight: isMobile ? "26px" : "2.2vw" }}
              textStyles={{ lineHeight: "35px" }}
            mobSize={16}
            type={"light"}
          >
            {secondDescription}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TitleTwoDescriptions;
