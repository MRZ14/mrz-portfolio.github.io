import "/src/assets/css/App.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MainLayout(props: any) {
	const showNavbar: boolean = props.showNavbar;
	const showFooter: boolean = props.showFooter;

	return (
		<>
			{showNavbar && <Navbar />}
				<div class="main-content">{props.children}</div>
			{showFooter && <Footer />}
		</>
	);
}

export default MainLayout;
