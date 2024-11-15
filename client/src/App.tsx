import Title from "./components/Title";
import { Slant } from "./components/Slant";
import UseCaseIntro from "./components/UseCaseIntro";
import UseCaseMain from "./components/UseCaseMain";
import FeaturesMain from "./components/FeaturesMain";

function App() {
  return (
    <main>
      <div className="relative z-20">
        <Title />
      </div>
      <div className="z-0">
        <Slant />
      </div>
      <div className="z-20">
        <UseCaseIntro />
      </div>
      <UseCaseMain />
      <FeaturesMain />
    </main>
  );
}

export default App;
