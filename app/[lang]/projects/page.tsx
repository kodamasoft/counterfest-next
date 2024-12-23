import { getDictionary } from '@/app/[lang]/dictionaries'

import Container from '@/components/container'
import ProseContainer from '@/components/prose-container'
import CtaButton from '@/components/project/cta-button'

import ProjectListing from '@/components/project-listing'
import projectsJson from '@/public/assets/projects/projects.json'


export default async function Projects({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
        <Container>

          <div className="container pt-10 px-6 mx-auto">
            <ProseContainer>
              <h2>{dict.projects.presentation.title}</h2>
              <p>{dict.projects.presentation.description}</p>
              <CtaButton link={`/${lang}/projects`} icon='book' className="mt-4 mx-auto">
                <span>{dict.projects.faqCta}</span>
              </CtaButton>

              <div>
                {projectsJson.map(function (category) {
                  return (
                    <>
                      <h2>{dict.projects[category.cat_slug].name}</h2>
                      <p>{dict.projects[category.cat_slug].desc}</p>

                      {category.projects.map(function (project) {
                        return (
                          <ProjectListing project={project} category={category} dict={dict} key={project.slug} />
                        )
                      }
                      )}
                    </>)
                })}
              </div>

              <h2>{dict.projects.goals.title}</h2>
              {Object.entries(dict.projects.goals.points).map(([key, point]) => (
                <div key={key}>
                  <ul><li>{point.title}</li></ul>
                  <p>{point.description}</p>
                </div>
              ))}
            </ProseContainer>
          </div>
        </Container>
    </>
  )
}
