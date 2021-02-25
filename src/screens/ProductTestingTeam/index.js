import React from "react";
import Text from "../../components/Text";
import "./index.scss";
import Title from "../../components/Title";
import options from "./options";
import IterableCircle from "../../components/IterableCircle";
import ColorBlock from "../../components/ColorBlock";
import EmailForm from "../../components/EmailForm";
import ProductTestingTeamCircles from "../../images/product-team.svg";
import ProductTestingTeamCircle from "../../images/product-team-second.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import HeaderTitle from "../../components/HeaderTitle";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import HeaderSecondType from "../../components/HeaderSecondType";
import ImageBlock from "../../components/ImageBlock";
import SecondImage from "../../images/product-testing-team-second.jpg";

const { benefits, joins } = options;

const ProductTestingTeam = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"product-testing-team-container"}>
      <HeaderSecondType
        title={"PRODUCT TESTING TEAM"}
        subtitleClassName={'product-testing-header-subtitle'}
        subtitle={
          "The power to test what is impossible with exclusive user testing."
        }
      />
      <div className={"product-testing-info-container"}>
        <div className={"circle-container"}>
          <img src={ProductTestingTeamCircles} />
        </div>

        <TwoColumnsHugeInfo
            containerStyles={{marginBottom: isMobile ? 170 : 0}}
          title={"TEAM OVERVIEW"}
          leftTitle={
            "Be a part of an exclusive beta family to get early access to apps, websites, and other tech creations."
          }
          rightTitle={`As a Moken beta family member, you'll join a group of tech-savvy members spread across the globe, to get early access and contribute to new tech products created by our members.`}
          rightFirstListTitle={"THE BENEFITS OF COLLABORATION"}
          firstList={benefits}
        />

        <ImageBlock position={"right"} url={SecondImage} />

        {/*<Title title={"HOW IT WORKS"} className={"product-testing-title"} />*/}

        {/*<div className={"joins-container"}>*/}
        {/*  <Text*/}
        {/*    className={"joins-title"}*/}
        {/*    animationType={"fade-in"}*/}
        {/*    size={50}*/}
        {/*    type={"kBold"}*/}
        {/*  >*/}
        {/*    Join Us Today.*/}
        {/*  </Text>*/}
        {/*  <div>*/}
        {/*    {joins.map((join, index) => {*/}
        {/*      return (*/}
        {/*        <IterableCircle*/}
        {/*          {...join}*/}
        {/*          key={"join" + index}*/}
        {/*          count={index + 1}*/}
        {/*          isLast={index === joins.length - 1}*/}
        {/*        />*/}
        {/*      );*/}
        {/*    })}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>

      <div className={"product-testing-team-circle-container"}>
        <img src={ProductTestingTeamCircle} />
      </div>

      <ProgramCommunityListPartner
        title={"LET’S BUILD"}
        subtitle={
          "Join our trusted community of partners and market what you do to founders and startups, globally."
        }
        subtitleClassName={'product-testing-programs-subtitle'}
        options={options.programs}
        type={'big'}
      />

      <EmailForm withForm className={"product-email-form"} />
    </div>
  );
};

export default ProductTestingTeam;
