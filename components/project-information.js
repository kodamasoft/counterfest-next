import projectsJSON from '@/public/assets/projects/projects.json';
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function ProjectInfo({ slug, children, params }) {
    let project = {};
    let category = {};
    const {lang} = await params;
    const dict = await getDictionary(lang);

    // iterate trough the array of sections in the projectsJSON file
    for (let i = 0; i < projectsJSON.length; i++) {
        // if in the projects array, we find a project with the same slug as the one we are looking for, return the project
        for (let j = 0; j < projectsJSON[i].projects.length; j++) {
            // if the project has the same slug as the one we are looking for, return the project
            if (projectsJSON[i].projects[j].slug === slug) {
                category = projectsJSON[i];
                project = projectsJSON[i].projects[j];
                break;
            }
        }
    }

	return (
		<p>
            <strong>{dict.projects.projectInfo.album_title}:</strong> {project.title}<br/>
            <strong>{dict.projects.projectInfo.status}:</strong> {dict.projects.common.statuses[project.status]}<br/>
            <strong>{dict.projects.projectInfo.approximate_completion}:</strong> {project.percentage ? project.percentage : " ???" }%<br/>
            <strong>{dict.projects.projectInfo.current_duration}:</strong> {project.duration ? project.duration : " ???" }<br/>
            <strong>{dict.projects.projectInfo.current_number_of_finished_tracks}:</strong> {project.finished_tracks ? project.finished_tracks : " ???" }<br/>
            <strong>{dict.projects.projectInfo.mastering_engineer}:</strong> {project.mastering && project.mastering.engineer ? project.mastering.engineer : " ???" }<br/>
            <strong>{dict.projects.projectInfo.mastering_status}:</strong> {project.mastering && project.mastering.status ? dict.projects.common.statuses[project.mastering.status] : " ???" }<br/>
            <strong>{dict.projects.projectInfo.artwork_commission}:</strong> {project.artwork_comission ? dict.projects.common.statuses[project.artwork_comission] : " ???" }<br/>
        </p>
	)
}
