import { useParams } from "@solidjs/router";
import MainLayout from "../layouts/main";

function NotFound() {
    const lang = useParams().lang;
    return (
        <>
            <MainLayout showNavbar={false} showFooter={false} lang={lang}>
                <h1>Pages Not Found (code: 404)</h1>
            </MainLayout>
        </>
    );
}

export default NotFound;
