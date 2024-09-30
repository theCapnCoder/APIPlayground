import { Link } from "react-router-dom";
import Fruits from "./containers/Fruits/Fruits";

function App() {
  return (
    <section>
      <Link to="/family">Family</Link>
      <Fruits />
    </section>
  );
}

export default App;
