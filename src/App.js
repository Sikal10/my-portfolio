import GlobalStyles from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "./styles/ThemeProvider";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
import Works from "./pages/Works/Works";
import {AnimatePresence} from "framer-motion";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles/>
            <ToastContainer />
            <AnimatePresence>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                    <Route path={"/skills"} element={<Skills/>}/>
                    <Route path={"/projects"} element={<Works/>}/>
                </Routes>
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default App;
