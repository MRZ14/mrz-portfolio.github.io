import { lazy } from "solid-js"
import { Router, Route } from "@solidjs/router"
import "/src/assets/css/App.css"

const Testing = lazy(() => import("./pages/testing"))
const NotFound = lazy(() => import("./pages/notFound"))
const Project = lazy(() => import("./pages/project"))
const DetailProject = lazy(() => import("./pages/detailProject"))

function App() {
	return (
		<Router>
			<Route path="/" component={Testing} />
			<Route path="/project">
				<Route path="/" component={Project} />
				<Route path="/:projectName" component={DetailProject}/>
			</Route>
			<Route path="/*404" component={NotFound} />
		</Router>
		// <Router>
		// 	<Route path="/" component={() => <Navbar/> {Signin} <Footer/>)} />
		// 	<Route path="/*404" component={() => {NotFound})} />
		// </Router>
	);
}

export default App;
