import { useParams } from "@solidjs/router";
import MainLayout from "../../layouts/main";

function Project() {
    const lang = useParams().lang;
    return (
        <>
            <MainLayout showNavbar={false} showFooter={false} lang={lang}>
                <h1>Project</h1>
            </MainLayout>
        </>
    );
}

export default Project;
