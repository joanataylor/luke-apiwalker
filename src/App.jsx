import { Routes, Route } from "react-router-dom";
import People from "./components/People";
import Planet from "./components/Planet";
import NavBar from "./components/NavBar";
import LukeWalker from "./components/LukeWalker";
import OnePerson from "./components/OnePerson";
import OnePlanet from "./components/OnePlanet";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<LukeWalker />}>
            <Route path="people/" element={<People />}>
              <Route path=":id" element={<OnePerson />} />
            </Route>
            <Route path="planets/" element={<Planet />}>
              <Route path=":id" element={<OnePlanet />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
