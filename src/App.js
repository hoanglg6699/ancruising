import { useState } from "react";
import Body from "./Body/Body";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
// import MenuLeft from "./Menu_left/Menu_left";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {/* <Intro /> */}
      <Header isVisible={isVisible} />
      <Body isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
}

export default App;
