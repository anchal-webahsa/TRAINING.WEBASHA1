import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Always use createRoot to prevent hydration mismatch crashes from pre-rendered API data.
// SEO bots will still see the pre-rendered HTML, but real users will get a fresh React SPA render.
createRoot(rootElement).render(app);