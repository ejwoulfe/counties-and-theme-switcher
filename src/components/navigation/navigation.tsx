import { useContext } from "react";
import "./navigation.scss";
import { ThemeContext } from "../../context/theme-context";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <nav
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}>
      <div className="nav__logo">
        <h1> Where in the world?</h1>
      </div>
      <div className="nav__button">
        {!dark ? <img src={sun} alt="sun" /> : <img src={moon} alt="moon" />}
        <button
          type="button"
          onClick={toggle}
          style={{
            color: theme.color,
          }}>
          {!dark ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
}
