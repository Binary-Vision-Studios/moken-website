import React from "react";
import Text from "../../../../components/Text";
import "./index.scss";
import arrow from "../../../../images/arrow-up-right-white.svg";
import {useHistory} from "react-router-dom";

const styles = {
  title: {
    color: "white",
  },
  description: {
    color: "white",
    lineHeight: "29px",
    fontWeight: 300
  },
  subTitle: {
    color: "white",
    letterSpacing: 4,
  },
};

const MenuScreenTopColumn = ({
  title = "",
  description = "",
  subTitle = "",
  image,
    route
}) => {
  const history = useHistory();

  return (
    <div className={"menu-screen-top-column-container"}>
      {image ? (
        <img src={image} className={"menu-screen-image"} />
      ) : (
        <Text
          size={30}
          type={"kSemiBold"}
          textStyles={styles.title}
          containerStyles={{ marginBottom: 30 }}
        >
          {title}
        </Text>
      )}
      <Text
        size={18}
        type={"kLight"}

        // type={"light"}
        textStyles={styles.description}
        containerStyles={{ marginBottom: 30 }}
      >
        {description}
      </Text>
      <div className={'subtitle-arrow-container'}   onClick={() => history.push(route)}>
        <Text
          size={14}
          mobSize={10}
          // type={"semiBold"}
          className={'black-menu-screen-subtitle'}
          textStyles={styles.subTitle}
          type={"kSemiBold"}

        >
          {subTitle}
        </Text>
        <img src={arrow} className={'black-menu-image'}/>
      </div>
    </div>
  );
};

export default MenuScreenTopColumn;
