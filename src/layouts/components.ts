import { ParentProps } from "solid-js";

export type MainLayoutProps = ParentProps & {
    showNavbar: boolean;
    showFooter: boolean;
    lang: string;
};
