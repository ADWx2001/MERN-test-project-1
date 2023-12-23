import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add" exact component={AddStudent} />
      </Routes>
    </Router>
  );
}

export default App;
