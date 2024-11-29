import { Projects } from "@/components/Projects";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: projects } = await sanityFetch({
    query: PROJECTS_QUERY,
  });

  return <Projects projects={projects} />;
}