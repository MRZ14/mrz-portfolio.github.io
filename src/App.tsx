import { lazy } from "solid-js";
import { Router, Route } from "@solidjs/router";
import "/src/assets/css/App.css";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));
const Project = lazy(() => import("./pages/projects/project"));
const DetailProject = lazy(() => import("./pages/projects/detailProject"));

function App() {
    return (
        <Router>
            <Route path="/:lang">
                <Route path="/" component={Home} />
                <Route path="/project">
                    <Route path="/" component={Project} />
                    <Route path="/:projectName" component={DetailProject} />
                </Route>
                <Route path="/*404" component={NotFound} />
            </Route>
        </Router>
        // <Router>
        // 	<Route path="/" component={() => <Navbar/> {Signin} <Footer/>)} />
        // 	<Route path="/*404" component={() => {NotFound})} />
        // </Router>
    );
}

export default App;
