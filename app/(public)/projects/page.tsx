import { Projects } from "@/components/Projects";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
    const { data: projects } = await sanityFetch({
        query: PROJECTS_QUERY,
    });

    return (
        <div className="container pt-10 px-6 mx-auto">
          <div className="prose md:prose-md prose-invert max-w-4xl mx-auto font-medium">
            <h1>Our projects</h1>
            <p>KodamaSounds albums are doujin album projects that are constantly growing and ongoing. On this page, you can have direct access to our current album plans and projects, to which you can participate at any time. We follow a schedule that we update regularly, and we generally calibrate deadlines for brand new projects in advance. It is preferred for artists to focus on albums with a release date, but It is still possible for you to contribute to any sequel albums that do not have a set release date yet - just please understand it may take a while, or even one or two years, if not more, for those to release.</p>
            <p>Those are albums entirely dedicated to a specific series/game. Any styles and genres are accepted, so long as they follow our individual guidelines. Image songs are also accepted so long as they follow the rules.</p>
            <div className="not-prose">
              <Projects projects={projects} />
            </div>
          </div>
        </div>
    );
}
