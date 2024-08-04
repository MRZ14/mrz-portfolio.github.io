import { MainLayoutProps } from "./components";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {ParentComponent } from "solid-js";

const MainLayout: ParentComponent<MainLayoutProps> = (props) => {
	return (
		<>
			{props.showNavbar && <Navbar />}
				<div class="main-content">{props.children}</div>
			{props.showFooter && <Footer />}
		</>
	);
}

export default MainLayout;
