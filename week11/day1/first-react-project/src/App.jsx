import "./App.css";

import Header from "./compoents/Header";
import Menu from "./compoents/Menu";
import Content from "./compoents/Content";
import Add from "./compoents/Add";
import Footer from "./compoents/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Content />
      <Add />
      <Footer />
    </div>
  );
}

export default App;
