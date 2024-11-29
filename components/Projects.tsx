import { PROJECTS_QUERYResult } from "../sanity.types";
import Link from "next/link";

export function Projects({ projects }: { projects: PROJECTS_QUERYResult }) {
  return (
    <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {projects.map((project) => (
        <li key={project._id}>
          <Link
            className="block p-4 hover:bg-gray-100/50"
            href={`/projects/${project?.slug?.current}`}
          >
            {project?.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}