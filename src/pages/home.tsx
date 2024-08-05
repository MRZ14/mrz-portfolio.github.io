import { useParams } from "@solidjs/router";
import MainLayout from "../layouts/main";
function Home() {
    const lang = useParams().lang;
    return (
        <>
            <MainLayout showNavbar={true} showFooter={true} lang={lang}>
                <p>Home pages</p>
            </MainLayout>
        </>
    );
}

export default Home;
