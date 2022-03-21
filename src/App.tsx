import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import Course from "./Course"
import Experience from "./Experience"
import Header from "./Header"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path={"/experience"} element={<Experience />} />
        <Route path={"/course"} element={<Course />} />
        <Route path={"/"} element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
