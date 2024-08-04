import MainLayout from "../../layouts/main";
import { useParams } from "@solidjs/router";

function DetailProject() {
    const params = useParams();
	return (
		<>
			<MainLayout showNavbar={false} showFooter={false}>
				<h1>detail project {params.projectName}</h1>
			</MainLayout>
		</>
	);
}

export default DetailProject;
