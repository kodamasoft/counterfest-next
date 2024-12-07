import { PROJECTS_QUERYResult } from "../sanity.types";
import ProjectListing from "./ProjectListing";

export function Projects({ projects }: { projects: PROJECTS_QUERYResult }) {
  console.log(projects);
  return (
    <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {projects.map((project) => (
        <ProjectListing project={project} key={project._id} />
        // <li key={project._id}>
        //   <Link
        //     className="block p-4 bg-blue-100 hover:bg-blue-200 text-blue-900 clip-notched"
        //     href={`/projects/${project?.slug?.current}`}
        //   >
        //     {project?.title}

        //   </Link>
        // </li>
      ))}
    </ul>
  );
}