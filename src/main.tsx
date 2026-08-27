import { createRoot, hydrateRoot } from "react-dom/client";
import Home from "../app/page";
import "../app/globals.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("The site root element is missing.");
}

const site = <Home />;

if (root.hasChildNodes()) {
  hydrateRoot(root, site);
} else {
  createRoot(root).render(site);
}
