import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom CSS variables for the theme colors
document.documentElement.style.setProperty('--primary', '38, 46, 76'); // #262E4C
document.documentElement.style.setProperty('--secondary', '61, 74, 127'); // #3D4A7F
document.documentElement.style.setProperty('--accent', '245, 166, 35'); // #F5A623

createRoot(document.getElementById("root")!).render(<App />);
