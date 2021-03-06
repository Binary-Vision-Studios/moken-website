import React from "react";
import Text from "../../../../components/Text";
import "./index.scss";
import ArrowUpRight from "../../../../images/arrow-up-right-black.svg";
import { useHistory } from "react-router-dom";
import Button from "../../../../components/Button";

const ExpertiseItem = ({ title = "", route = "/", isComingSoon }) => {
  let history = useHistory();

  const goToRoute = () => {
    return isComingSoon ? null : history.push(route);
  };

  return (
    <div className={"expertise-item-container"} style={{cursor: isComingSoon ? "not-allowed" : 'pointer'}} onClick={goToRoute}>
      <Text
        // size={'4.7vw'}
        size={50}
        animationType={"fade-in"}
        mobSize={35}
        type={"kLight"}
        className={"expertise-item-title"}
      >
        {title}
      </Text>
      <div className={"expertise-item-right"}>
        <Text
            size={16}
          type={"kSemiBold"}
          mobSize={12}
          className={"expertise-item-learn"}
        >
            {isComingSoon ? 'COMING SOON' : 'LEARN MORE'}
        </Text>
        <img
          data-aos="fade-in"
          className={"expertise-item-img"}
          src={ArrowUpRight}
        />
      </div>
    </div>
  );
};

export default ExpertiseItem;
