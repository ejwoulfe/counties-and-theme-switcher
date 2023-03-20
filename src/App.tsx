import "./App.css";
import CountriesContainer from "./components/countries/countries-container";
import Navigation from "./components/navigation/navigation";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <main className="app">
      <ThemeProvider>
        <Navigation />
        <CountriesContainer />
      </ThemeProvider>
    </main>
  );
}

export default App;
