import { ThemeProvider } from "@emotion/react";

import Main from "./Main"
import { CurrentPageContextProvider } from "./context/CurrentPageContext"
import theme from "./context/theme";
import { CssBaseline } from "@mui/material";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CurrentPageContextProvider>
        <CssBaseline/>
        <Main/>
      </CurrentPageContextProvider>
    </ThemeProvider>
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
