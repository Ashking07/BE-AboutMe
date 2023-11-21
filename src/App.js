import "./App.css";
import Benefit from "./benefits.jsx";
import Header from "./header.jsx";
import MissionVission from "./mission-vision.jsx";
import Team from "./theTeam.jsx";

function App() {
  return (
    <main className="App">
       <Header />
       <Benefit/>
       <MissionVission/>
       <Team/>
    </main>
  );
}

export default App;
