// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
// import Home from "./Home"
// import Course from "./Course"
// import Experience from "./Experience"
// import Header from "./Header"
// import BlockList from "./BlockList"
import Main from "./Main"
import { CurrentPageContextProvider } from "./context/CurrentPageContext"

function App() {
  return (
    <CurrentPageContextProvider>
      <Main/>
    </CurrentPageContextProvider>
    // <Router>
    //   <Header/>
    //   <Routes>
    //     <Route path={"/experience"} element={<Experience />} />
    //     <Route path={"/course"} element={<Course />} />
    //     <Route path={"/"} element={<BlockList section={"1"} />}>
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
