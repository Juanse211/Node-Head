import "../css/main.css"
import { createContext } from "react"
import { useState } from "react"
import homeContainer from "../container/homeContainerS"

export const ThemeContext = createContext(null)

function ThemeFunction() {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dart" : "light"))
  }
  return (<>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <homeContainer />
      </div>
    </ThemeContext.Provider>
  </>
  )
} 