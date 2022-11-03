import { useState } from "react";
import Body from "./Body/Body";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Loader from "./Loader/Loader";
// import MenuLeft from "./Menu_left/Menu_left";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <div className="App">
      {/* <Intro /> */}
      <Header isVisible={isVisible} />
      {isLoading ? (
        <Loader />
      ) : (
        <Body isVisible={isVisible} setIsVisible={setIsVisible} />
      )}
    </div>
  );
}

export default App;
