import ReactDOM from "react-dom/client";
import App from "./App";
import { initGA, logPageView } from "./functions/analytics";
import reportWebVitals from "./functions/webvitals";

initGA();
logPageView();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);

reportWebVitals();
