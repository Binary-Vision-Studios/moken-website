import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router,HashRouter, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { Helmet } from 'react-helmet';
import routsTitles from "./routsTitles";

import Header from "./components/Header";
import MenuScreen from "./screens/MenuScreen";
import Footer from "./components/Footer";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Other from "./screens/Other";
import BackendDeveloper from "./screens/BackendDeveloper";
import CommunityManager from "./screens/CommunityManager";
import Copywriter from "./screens/Copywriter";
import Designer from "./screens/Designer";
import EmailMarketing from "./screens/EmailMarketing";
import EventCoordinator from "./screens/EventCoordinator";
import IllustratorGraphic from "./screens/IllustratorGraphic";
import FrontendDeveloper from "./screens/FrontEndDeveloper";
import PartnershipManager from "./screens/PartnershipManager";
import PodcastHost from "./screens/PodcastHost";
import SocialMediaManager from "./screens/SocialMediaManager";
import YouTubeHost from "./screens/YouTubeHost";
import Careers from "./screens/Careers";
import Opportunities from "./screens/Opportunities";
import Portfolio from "./screens/Portfolio";
import TermsAndConditions from "./screens/TermsAndConditions";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Expertise from "./screens/Expertise";
import StartUpSmart from "./screens/StartUpSmart";
import ProductTestingTeam from "./screens/ProductTestingTeam";
import OurPartners from "./screens/OurPartners";
import AboutAgency from "./screens/AboutAgency";
import UpcomingEvents from "./screens/UpcomingEvents";
import Community from "./screens/Community";
import Branding from "./screens/Branding";
import StrategyAdvisory from "./screens/StrategyAdvisory";
import ProgramDrivenMarketing from "./screens/ProgramDrivenMarketing";
import ProductDevelopment from "./screens/ProductDevelopment";
import ProductDesign from "./screens/ProductDesign";
import MarketResearchValidation from "./screens/MarketResearchValidation";
import DesignDevelop from "./screens/DesignDevelop";
import CommunityDevelopment from "./screens/CommunityDevelopment";
import ProductStrategy from "./screens/ProductStrategy";
import PartnershipPrograms from "./screens/PartnershipPrograms";
import GraphicDesigner from "./screens/GraphicDesigner";
import Photographer from "./screens/Photographer";
import Videographer from "./screens/Videographer";
import LeadInfrastructureEngineer from "./screens/LeadInfrastructureEngineer";
import JobOffer from "./screens/JobOffer";
import HostAnEvent from "./screens/HostAnEvent";
import PeopleLeadership from "./screens/PeopleLeadership";
import AboutMoken from "./screens/AboutMoken";
import OurVision from "./screens/OurVision";
import MokenLabs from "./screens/Programs/MokenLabs";
import Courses from "./screens/Programs/Courses";
import FutureFounders from "./screens/Programs/FutureFounders";
import RaisingRight from "./screens/Programs/RaisingRight";
import IdeationToInnovation from "./screens/Programs/IdeationToInnovation";
import AboutPrograms from "./screens/Programs/AboutPrograms";
import ConnectWithUs from "./screens/ConnectWithUs";
import MoPlusKen from "./screens/MoPlusKen";
import InnovatorFeature from "./screens/InnovatorFeature";
import ForInvestors from "./screens/ForInvestors";
import ForStudents from "./screens/ForStudents";
import ForStartups from "./screens/ForStartups";
import ForBrands from "./screens/ForStartupPrograms";
import AdvertiseWithUs from "./screens/AdvertiseWithUs";
import ForFounders from "./screens/ForFounders";
import CommunityPartnerScreen from "./screens/CommunityPartnerScreen";
import EducationPartners from "./screens/EducationPartners";
import EcoPartners from "./screens/EcoPartners";
import StartUpScreen from "./screens/StartUpScreen";
import Access from "./screens/Access";
import Faqs from "./screens/Faqs";
import Mentorship from "./screens/Mentorship";
import InnovationCommittee from "./screens/InnovationCommittee";
import AOS from "aos";
import "aos/dist/aos.css";
import Events from "./screens/Events";
import Advisors from "./screens/Advisors";
import ProductMarketing from "./screens/ProductMarketing";
import CommunityDrivenGrowth from "./screens/CommunityDrivenGrowth";
import PartnershipsGrowth from "./screens/PartnershipsGrowth";
import Home from "./screens/Home";
import ForStartupPrograms from "./screens/ForStartupPrograms";
import IndustryPartners from "./screens/IndustryPartners";
import Ambassador from "./screens/Ambassador";

const routsWithHeaderFooter = [
  {
    path: "/mentorship",
    component: Mentorship,
  },
  {
    path: "/events",
    component: Events,
  },
  {
    path: "/faqs",
    component: Faqs,
  },
  {
    path: "/access",
    component: Access,
  },
  {
    path: "/start-up-smart",
    component: StartUpScreen,
  },
  {
    path: "/eco-partners",
    component: EcoPartners,
  },
  {
    path: "/education-partner",
    component: EducationPartners,
  },
  {
    path: "/community-partner",
    component: CommunityPartnerScreen,
  },
  {
    path: "/for-founders",
    component: ForFounders,
  },
  {
    path: "/advertise-with-us",
    component: AdvertiseWithUs,
  },
  {
    path: "/for-startup-programs",
    component: ForStartupPrograms,
  },
  {
    path: "/for-startups",
    component: ForStartups,
  },
  {
    path: "/for-students",
    component: ForStudents,
  },
  {
    path: "/for-investors",
    component: ForInvestors,
  },
  {
    path: "/iamafounder",
    component: InnovatorFeature,
  },
  {
    path: "/mo-ken",
    component: MoPlusKen,
  },
  {
    path: "/connect-with-us",
    component: ConnectWithUs,
  },
  {
    path: "/about-programs",
    component: AboutPrograms,
  },
  {
    path: "/ideation-to-innovation",
    component: IdeationToInnovation,
  },
  {
    path: "/raising-right",
    component: RaisingRight,
  },
  {
    path: "/future-founders",
    component: FutureFounders,
  },
  {
    path: "/moken-labs",
    component: MokenLabs,
  },
  {
    path: "/courses",
    component: Courses,
  },
  {
    path: "/our-vision",
    component: OurVision,
  },
  {
    path: "/partnership-programs",
    component: PartnershipPrograms,
  },
  {
    path: "/about-moken",
    component: AboutMoken,
  },
  {
    path: "/product-strategy",
    component: ProductStrategy,
  },
  {
    path: "/host-an-event",
    component: HostAnEvent,
  },
  {
    path: "/people-leadership",
    component: PeopleLeadership,
  },
  {
    path: "/community-development",
    component: CommunityDevelopment,
  },
  {
    path: "/design-develop",
    component: DesignDevelop,
  },
  {
    path: "/market-research-validation",
    component: MarketResearchValidation,
  },
  {
    path: "/product-design",
    component: ProductDesign,
  },
  {
    path: "/product-development",
    component: ProductDevelopment,
  },
  {
    path: "/program-driven-marketing",
    component: ProgramDrivenMarketing,
  },
  {
    path: "/strategy-advisory",
    component: StrategyAdvisory,
  },
  {
    path: "/branding",
    component: Branding,
  },
  {
    path: "/product-marketing",
    component: ProductMarketing,
  },
  {
    path: "/community-driven-growth",
    component: CommunityDrivenGrowth,
  },
  {
    path: "/partnerships-growth",
    component: PartnershipsGrowth,
  },
  {
    path: "/advisors",
    component: Advisors,
  },
  {
    path: "/community",
    component: Community,
  },
  {
    path: "/about-agency",
    component: AboutAgency,
  },
  {
    path: "/our-partners",
    component: OurPartners,
  },
  {
    path: "/product-testing-team",
    component: ProductTestingTeam,
  },
  {
    path: "/start-up-smart-packages",
    component: StartUpSmart,
  },
  {
    path: "/expertise",
    component: Expertise,
  },
  {
    path: "/privacy",
    component: PrivacyPolicy,
  },
  {
    path: "/terms",
    component: TermsAndConditions,
  },
  {
    path: "/upcoming-events",
    component: UpcomingEvents,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/careers",
    component: Careers,
  },

  {
    path: "/opportunities",
    component: Opportunities,
  },

  {
    path: "/other",
    component: Other,
  },

  {
    path: "/community-manager",
    component: CommunityManager,
  },
  {
    path: "/copywriter",
    component: Copywriter,
  },
  {
    path: "/designer",
    component: Designer,
  },
  {
    path: "/email-marketing",
    component: EmailMarketing,
  },
  {
    path: "/event-coordinator",
    component: EventCoordinator,
  },
  {
    path: "/illustrator-graphic",
    component: IllustratorGraphic,
  },
  {
    path: "/frontend-developer",
    component: FrontendDeveloper,
  },
  {
    path: "/partnership-manager",
    component: PartnershipManager,
  },
  {
    path: "/podcast-host",
    component: PodcastHost,
  },
  {
    path: "/photographer",
    component: Photographer,
  },
  {
    path: "/videographer",
    component: Videographer,
  },
  {
    path: "/lead-infrastructure-engineer",
    component: LeadInfrastructureEngineer,
  },
  {
    path: "/job-offer/:id",
    component: JobOffer,
  },
  {
    path: "/social-media-manager",
    component: SocialMediaManager,
  },

  {
    path: "/youtube-host",
    component: YouTubeHost,
  },
  {
    path: "/backend-developer",
    component: BackendDeveloper,
  },
  {
    path: "/graphic-designer",
    component: GraphicDesigner,
  },
  {
    path: "/industry-partners",
    component: IndustryPartners,
  },
  {
    path: "/ambassador",
    component: Ambassador,
  },
  // {
  //     path: "/",
  //     component: Opportunities
  // },
  {
    path: "/",
    component: Home,
  },
  // {
  //   path: "/",
  //   test: 'ASD',
  //   component: AboutMoken,
  // },
];
const routsWithoutHeaderFooter = [
  {
    path: "/menuscreen",
    component: MenuScreen,
  },
  {
    path: "/innovation-week",
    component: InnovationCommittee,
  },
];

function App() {
  const { width } = useWindowDimensions();


  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
        <HashRouter>
        {/*<Router>*/}
          <ScrollToTop />
          <div style={{ minHeight: "100vh"}}>
            <Switch>
              {routsWithoutHeaderFooter.map((route, index) => {
                return (

                  <Route
                    key={"routsWithoutHeaderFooter" + index}
                    path={route.path}
                    children={(props) => (
                          <>
                            <Helmet>
                              <title>{routsTitles[props.location.pathname]}</title>
                            </Helmet>
                            <route.component />
                          </>
                        )}
                  />
                );
              })}
              {routsWithHeaderFooter.map((route, index) => {
                return (

                      <Route
                        key={"routsWithHeaderFooter" + index}
                        path={route.path}
                        // children={<route.component />}
                        children={(props) => {
                          // pass the sub-routes down to keep nesting
                          return (
                            <>
                              <Helmet>
                                <title>{routsTitles[props.location.pathname]}</title>
                              </Helmet>
                              <Header isOpen={isOpen} setIsOpen={setIsOpen} />
                              {/*<div style={{maxWidth: 1685, margin: '0 auto'}}>*/}
                                <route.component {...props} />
                              {/*</div>*/}
                              <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
                            </>
                          );
                        }}
                      />
                );
              })}
            </Switch>
          </div>
        </HashRouter>
  );
}

export default App;
