import { MainLayoutProps } from "./components";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { JSXElement, ParentComponent } from "solid-js";

const MainLayout: ParentComponent<MainLayoutProps> = (props): JSXElement => {
    return (
        <>
            <main class="bg-[#F2F3F9]">
                {props.showNavbar && <Navbar lang={props.lang} />}
                <section class="main-content">{props.children}</section>
                {props.showFooter && <Footer lang={props.lang} />}
            </main>
        </>
    );
};

export default MainLayout;
