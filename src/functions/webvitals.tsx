import type { ReportHandler } from "web-vitals";
import { logEvent } from "./analytics";

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) =>
        logEvent("Web Vitals", metric.name, metric.value.toString()),
      );
      getFID((metric) =>
        logEvent("Web Vitals", metric.name, metric.value.toString()),
      );
      getFCP((metric) =>
        logEvent("Web Vitals", metric.name, metric.value.toString()),
      );
      getLCP((metric) =>
        logEvent("Web Vitals", metric.name, metric.value.toString()),
      );
      getTTFB((metric) =>
        logEvent("Web Vitals", metric.name, metric.value.toString()),
      );
    });
  }
};

export default reportWebVitals;
