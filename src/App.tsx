import Title from "./components/Title";
import { Slant } from "./components/Slant";
import UseCaseIntro from "./components/UseCaseIntro";

function App() {
  return (
    <main>
      <div className="relative z-20">
        <Title />
      </div>
      <div className="z-0">
        <Slant color="dark-grey" height="175px" />
      </div>
      <div className="z-10">
        <Slant color="light-grey" height="100px" style={{ marginTop: "0" }} />
      </div>
      <div className="z-20">
        <UseCaseIntro />
      </div>
    </main>
  );
}

export default App;
