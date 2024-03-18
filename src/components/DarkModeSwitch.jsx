import ReactSwitch from "react-switch";
import "./DarkModeSwitch.css";

export default function DarkMode({ theme, toggleTheme }) {
  return (
    <div className="switch">
      <label>{theme === "dark" ? "🌘 Dark mode" : "☀️ Light mode"}</label>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    </div>
  );
}
