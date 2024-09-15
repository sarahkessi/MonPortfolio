import styles from "./App.module.css";
import { NavBar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <Hero/>
    </div>
  );
}

export default App;
