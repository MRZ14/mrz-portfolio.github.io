import { Show, lazy } from "solid-js"
import { Router, Route, Navigate } from "@solidjs/router"
import "/src/assets/css/App.css"

import MainLayout from "./layouts/main"

const Testing = lazy(() => import("./pages/testing"))
const NotFound = lazy(() => import("./pages/notFound"))
const Project = lazy(() => import("./pages/project"))
const DetailProject = lazy(() => import("./pages/detailProject"))

function App() {
	return (
		<Router root={MainLayout}>
			<Route path="/" component={Testing} />
			<Route path="/project" component={Project}/>
			<Route path="/detail-project" component={DetailProject}/>
			<Route path="/*404" component={NotFound} />
		</Router>
		// <Router>
		// 	<Route path="/" component={() => <Navbar/> {Signin} <Footer/>)} />
		// 	<Route path="/*404" component={() => {NotFound})} />
		// </Router>
	);
}

export default App;
