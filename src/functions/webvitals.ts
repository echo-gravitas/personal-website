import { logEvent } from './analytics';
type WebVitalsCallback = (metric: { name: string; value: number }) => void;

const reportWebVitals = (onPerfEntry?: WebVitalsCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
      onCLS((metric) =>
        logEvent('Web Vitals', metric.name, metric.value.toString()),
      );
      onFCP((metric) =>
        logEvent('Web Vitals', metric.name, metric.value.toString()),
      );
      onLCP((metric) =>
        logEvent('Web Vitals', metric.name, metric.value.toString()),
      );
      onTTFB((metric) =>
        logEvent('Web Vitals', metric.name, metric.value.toString()),
      );
    });
  }
};

export default reportWebVitals;
