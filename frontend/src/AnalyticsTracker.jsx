// AnalyticsTracker.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        page_title: document.title,
      });

      console.log("Page view tracked:", location.pathname); // optional debug
    } else {
      console.warn("gtag not found");
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;
