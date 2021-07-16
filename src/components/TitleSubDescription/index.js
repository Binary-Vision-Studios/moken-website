import React from "react";
import Title from "../Title";
import Text from "../Text";
import "./index.scss";
import Button from "../Button";

const TitleSubDescription = ({
  title = "",
  subtitle = "",
  description = "",
  btnTitle = "",
  AdditionalComponent,
  containerStyles = {},
  subtitleClassName = "",
  descriptionClassName = "",
  id,
}) => {
  return (
    <div
      className={"title-sub-description-container"}
      style={containerStyles}
      id={id}
    >
      <Title title={title} className={"title-sub-description-title"} />
      <Text
        className={`${subtitleClassName} title-sub-description-subtitle`}
        animationType={"fade-in"}
        type={"kBold"}
        // type={"extraLight"}
        size={50}
        mobSize={35}
      >
        {subtitle}
      </Text>
      {description ? (
        <Text
          className={`${descriptionClassName} title-sub-description-description`}
          animationType={"fade-in"}
          type={"kLight"}
          // type={"light"}
          size={20}
          mobSize={16}
        >
          {description}
        </Text>
      ) : null}
      {btnTitle ? (
        <div className={"title-sub-description-btn-container"}>
          <Button
            className={"title-sub-description-btn"}
            title={btnTitle}
            containerStyles={{ padding: 0 }}
            type={"lowerMenu"}
          />
        </div>
      ) : null}
      {AdditionalComponent ? <AdditionalComponent /> : null}
    </div>
  );
};

export default TitleSubDescription;
