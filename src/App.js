import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import { Navbar } from "./components/NavBar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default App;
