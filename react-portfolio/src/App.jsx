import styles from "./App.module.css";
import { NavBar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Languages } from "./components/Langages/Langages";

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <Hero/>
      <Languages/>
    </div>
  );
}

export default App;
