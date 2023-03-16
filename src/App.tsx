import { useState, createContext } from "react";
import "./app.css";
import Navigation from "./components/navigation/navigation";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <main className="app">
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </main>
  );
}

export default App;
