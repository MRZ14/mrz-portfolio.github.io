import { useParams } from "@solidjs/router";
import MainLayout from "../layouts/main";
import CardComponent from "../components/card";
function Home() {
    const lang = useParams().lang;
    return (
        <>
            <MainLayout showNavbar={true} showFooter={true} lang={lang}>
                <CardComponent img="test" imgAlt="test" lang={lang}>
                    <p>Home pages</p>
                </CardComponent>
            </MainLayout>
        </>
    );
}

export default Home;
