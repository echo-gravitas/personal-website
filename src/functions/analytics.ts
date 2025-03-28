import ReactGA from "react-ga4";

const GA_TRACKING_ID = "G-E259F43NWW";

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({ category, action, label });
};
