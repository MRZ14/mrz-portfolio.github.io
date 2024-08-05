import { MainLayoutProps } from "./components";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { JSXElement, ParentComponent } from "solid-js";

const MainLayout: ParentComponent<MainLayoutProps> = (props): JSXElement => {
    return (
        <>
            <main class="bg-[#F5F7F8]">
                {props.showNavbar && <Navbar lang={props.lang} />}
                <div class="main-content">{props.children}</div>
                {props.showFooter && <Footer lang={props.lang} />}
            </main>
        </>
    );
};

export default MainLayout;
