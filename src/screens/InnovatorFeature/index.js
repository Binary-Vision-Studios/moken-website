import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import HeaderTitle from "../../components/HeaderTitle";
import "./index.scss";
import TitleTwoDescriptionWithBtn from "../Programs/components/TitleTwoDescriptionWithBtn";
import ImageTitleSubDescList from "../../components/ImageTitleSubDescList";
import options from "./options";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import EmailForm from "../../components/EmailForm";
import ImageBlock from "../../components/ImageBlock";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import TitleSubDescription from "../../components/TitleSubDescription";
import Button from "../../components/Button";
import innovatorFeatureFirst from "../../images/innovator-feature-first.jpg";
import innovatorFeatureSecond from "../../images/innovator-feature-second.jpg";
import innovatorFeatureThird from "../../images/innovator-feature-third.jpg";
import Form from "../../components/Form";

const InnovatorFeature = () => {
  const { isMobile } = useWindowDimensions();

  const [isFormOpened, setIsFormOpened] = useState(false);

  return (
    <div className={"innovator-container"}>
      <Form
        isOpen={isFormOpened}
        setIsOpen={setIsFormOpened}
        formName={"Innovation Week Committee Interest Application Form"}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfWL5SgL8QnPUTP0RkAZdH5ZEToPq00AnU5j7aN9z1lt-U2bw/viewform?embedded=true"
          width={"100%"}
          height="auto"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        />
      </Form>
      <HeaderTitle
        title={"#IAmAFounder"}
        subtitleClassName={"innovator-feature-header-subtitle"}
        descriptionClassName={"innovator-feature-header-description"}
        subtitle={"Show off your hard work, you deserve it."}
        description={
          "We understand how it feels being part of a community and learning from one another. We also know how difficult it is to build a startup, especially during a global crisis. This is why we want to cultivate community by showcasing founders working diligently to create the future, even in times of crisis"
        }
        marginBottom={isMobile ? 152 : 142}
      />

      <ImageBlock position={"right"} url={innovatorFeatureFirst} />

      <TitleSubDescription
        title={"ABOUT THE INITIATIVE"}
        subtitleClassName={"innovator-feature-about-subtitle"}
        descriptionClassName={"innovator-feature-about-description"}
        subtitle={
          "A community driven initiative dedicated to sharing authentic founder stories."
        }
        description={
          "Get ready to join us for innovator week! We want to hear YOUR STORY. July 18-24 is an entire week dedicated to sharing your story, supporting and learning from one another, and ultimately impacting the global startup ecosystem."
        }
        AdditionalComponent={() => {
          return (
            <div
              style={{ padding: isMobile ? "0 43px" : "0 14vw", marginTop: 50 }}
            >
              <span
                style={{
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "0.18px",
                  maxWidth: "550px",
                  display: "block",
                }}
              >
                Additionally, Moken’s Founders of the Year nominations are open!
                Learn more about it{" "}
                <Link
                  smooth
                  to="/iamafounder#oh-wait"
                  style={{ color: "black" }}
                >
                  here
                </Link>
              </span>
            </div>
          );
        }}
      />

      {/*<TitleTwoDescriptionWithBtn*/}
      {/*  title={*/}
      {/*    "We increase website leads, maximize revenu and produce a positive ROI " +*/}
      {/*    "— validated with measurable results."*/}
      {/*  }*/}
      {/*  mainTitle={'ABOUT THE INITIATIVE'}*/}
      {/*  firstText={*/}
      {/*    "Our capabilities span the breadth of operations, project, and" +*/}
      {/*    " product management; business strategy; marketing; design; technology; revenue" +*/}
      {/*    " optimization; talent acquisition; growth; and sales, across all industries " +*/}
      {/*    "through customized products, services, courses, workshops, solutions, and mentorship."*/}
      {/*  }*/}
      {/*  secondText={*/}
      {/*    "We partner with innovators through our tailored and integrative " +*/}
      {/*    "expertise, complemented by a vibrant ecosystem of game-changing partners to " +*/}
      {/*    "deliver accelerated, superior, and impactfully driven outcomes."*/}
      {/*  }*/}
      {/*/>*/}

      <ImageTitleSubDescList
        containerClassName={"innovator-feature-gain-container"}
        title={"WHAT YOU’LL GAIN"}
        // subtitle={"We make it easy to kickstart your vision."}
        subtitleClassName={"innovator-feature-gain-subtitle"}
        listClassName={"innovator-feature-gain-list"}
        descriptionClassName={"innovator-feature-gain-description"}
        description={
          "By sharing your story throughout Innovator Week, you’ll have the opportunity to connect with a large variety of founders; " +
          "anywhere from those who are interested in startups and on the path to becoming a founder, to those who have created monster companies. " +
          "Throughout Innovator Week, you’re going to learn from fellow founders, create new connections, and grow as a founder yourself in the #IAmAFounder community! " +
          " We want you to share your story because we are founders, together. Sharing your story has the capacity to uplift underrepresented individuals, encourage somebody to become a founder, or inspire people to share their story as well."
        }
        // list={options.list}
        imgURL={innovatorFeatureSecond}
      />

      <LeftInfoWithRightImage
        withoutRightPadding
        leftContainerClassName={"innovator-feature-steps-left-container"}
        mainTitle={"Join Us for Innovator Week!"}
        titleClassName={"innovator-feature-steps-subtitle"}
        descriptionClassName={"innovator-feature-steps-description"}
        title={"Showcasing your accomplishments made efficient and easy."}
        imageClassName={"innovator-feature-steps-image"}
        description={`During the week of July 18-24, all you need to do is share your story in the #IAmAFounder community on your socials! 
        Focus on the impact you’ve made - big or small. Hype lingo is cool sometimes but we want to hear your raw and authentic startup journey; 
        setbacks and all. You can follow along and connect with fellow founders by using #IAmAFounder & #PoweredByMoken. Stay tuned to our socials 
        for updates and events throughout the week! We can’t wait for you to share your journey!`}
        imgUrl={innovatorFeatureThird}
        // btnTitle={"SHARE YOUR STORY"}
        // onClick={() => setIsFormOpened(true)}
      />

      <TitleSubDescription
        title={"Oh Wait, There’s More?"}
        subtitleClassName={"innovator-feature-about-subtitle"}
        descriptionClassName={"innovator-feature-about-description"}
        subtitle={"Who Doesn’t Love Going the Extra Mile?"}
        description={
          "Our nominations for Moken’s Founders of the Year are officially open! Moken’s Founders of the Year will showcase authentic, " +
          "changeworthy founders working diligently to impact and create the future. They will have the opportunity to work closely with Moken, " +
          "be featured on our socials, and be this years face of #IAmAFounder"
        }
        id={"oh-wait"}
        AdditionalComponent={() => {
          return (
            <div
              style={{ padding: isMobile ? "0 43px" : "0 14vw", marginTop: 50 }}
            >
              <Button
                title={"SHARE YOUR STORY"}
                onClick={() => setIsFormOpened(true)}
              />
            </div>
          );
        }}
      />

      <EmailForm withForm />
    </div>
  );
};

export default InnovatorFeature;
