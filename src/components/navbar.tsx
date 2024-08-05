import { A } from "@solidjs/router";
import { Component, JSXElement } from "solid-js";

type NavbarProps = {
    lang: string;
};

const Navbar: Component<NavbarProps> = (props): JSXElement => {
    const url = () => window.location.origin;
    if (props.lang === "id") {
        return <>Lang ID</>;
    } else {
        return (
            <>
                <nav id="navbar" class="md:container md:mx-auto">
                    <section class="flex justify-around">
                        <section>Personal Portfolio</section>
                        <section class="flex">
                            <A href={url() + "/en/#about"} class="me-5">
                                About
                            </A>
                            <A
                                href={url() + "/en/#programming_language"}
                                class="mx-5"
                            >
                                Programming Language
                            </A>
                            <A href={url() + "/en/#project"} class="ms-5">
                                Project
                            </A>
                        </section>
                    </section>
                </nav>
            </>
        );
    }
};

export default Navbar;
