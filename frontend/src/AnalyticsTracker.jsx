import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_title: document.title,
    });

    console.log("Tracked:", pathname);
  }, [pathname]);

  return null;
};

export default AnalyticsTracker;
