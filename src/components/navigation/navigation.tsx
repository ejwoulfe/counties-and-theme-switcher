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
      <button
        className="nav__button"
        type="button"
        onClick={toggle}
        style={{
          color: theme.color,
        }}>
        {!dark ? (
          <img src={moon} alt="moon" />
        ) : (
          <img
            src={sun}
            style={{
              filter: "invert(100%) sepia(10%) saturate(298%) hue-rotate(150deg) brightness(114%) contrast(100%)",
            }}
            alt="sun"
          />
        )}

        {!dark ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}
