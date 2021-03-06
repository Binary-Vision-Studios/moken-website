import firstImage from '../../images/branding-first@3x.jpg';
import secondImage from '../../images/branding-second@3x.jpg';

export default {
  firstSection: {
    title: {
      titleFirst: "EXPERTISE // BRANDING",
      // titleConjunctions: "//",
      // titleSecond: "BRANDING",
    },
    subtitleContainerStyles: {
      maxWidth: 750
    },
    subtitle: "Telling emotionally compelling stories that create action.",
    imgURL: firstImage,
    infoBlock: {
      infoTitleFirst:
        "Buyers who emotionally connect with your brand are 60% more likely to consider purchasing from you.",
      infoDescriptionFirst:
        "An effective brand can give you a significant edge in today’s highly competitive market. We create emotional connections far beyond simply making your brand look visually appelling. We create authentic and unforgettable visuals and voice that connects with your customers.",
      infoSubtitleFirst: "— WORK WITH US",
    },
  },
  secondSection: {
    title: "BRANDING CAPABILITIES",
    mapItems: [
      {
        title: `Brand Strategy
& Positioning`,
        // route: ''
      },
      {
        title: `Brand
Implementation Guide`,
        // route: ''
      },
      {
        title: `Brand Identity
System & Guidelines`,
        // route: ''
      },
      {
        title: `Brand
Extensions`,
        // route: ''
      },
    ],
    imgURL: secondImage,
  },
  thirdSection: {
    title: "WHAT WE DO",
    mapItems: [
      {
        route: '',
        title:
          "Enthusiastic individuals working together to create extraordinary results.",
        btnTitle: "EXPLORE OUR EXPERTISE",
      },
    ],
  },
};
