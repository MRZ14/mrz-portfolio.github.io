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
                <nav id="navbar" class="md:container md:mx-auto md:pt-10">
                    <section class="flex justify-around shadow-[0.4rem_0.4rem_0.4rem_0_rgb(209,213,219),-0.4rem_-0.4rem_0.4rem_0_rgb(255,255,255)] py-3 border rounded-md">
                        <span class="flex flex-col justify-center">
                            <A href={url()} class="text-xl">
                                Personal Portfolio
                            </A>
                        </span>
                        <section class="flex">
                            <A
                                href={url() + "/en/#about"}
                                class="me-2 px-5 py-2 hover:shadow-[inset_0.2rem_0.2rem_0.4rem_0_rgb(209,213,219),inset_-0.4rem_-0.4rem_0.5rem_0_rgb(255,255,255)] rounded-md"
                            >
                                About
                            </A>
                            <A
                                href={url() + "/en/#programming_language"}
                                class="mx-2 px-5 py-2 hover:shadow-[inset_0.2rem_0.2rem_0.4rem_0_rgb(209,213,219),inset_-0.4rem_-0.4rem_0.5rem_0_rgb(255,255,255)] rounded-md"
                            >
                                Programming Language
                            </A>
                            <A
                                href={url() + "/en/#project"}
                                class="ms-2 px-5 py-2 hover:shadow-[inset_0.2rem_0.2rem_0.4rem_0_rgb(209,213,219),inset_-0.4rem_-0.4rem_0.5rem_0_rgb(255,255,255)] rounded-md"
                            >
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
