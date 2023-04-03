import { createRoot } from "react-dom/client";
import App from "./App.component";
import "./style.scss";

// Clear the existing HTML content
document.body.innerHTML = "<div id=\"root\"></div>";

// Render your React component instead
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(App());
