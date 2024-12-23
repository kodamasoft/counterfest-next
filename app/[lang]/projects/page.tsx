import { getDictionary } from '@/app/[lang]/dictionaries'

import Container from '@/components/container'
import Header from '@/components/header'
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
          <Header />

          <div className="container pt-10 px-6 mx-auto">
            <ProseContainer>
              <h2>{dict.projects.presentation.description}</h2>
              <p>{dict.projects.presentation.description}</p>
              <CtaButton link="/projects/faq" icon='book' className="mt-4 mx-auto">
                <span>{`dict.projects.faq-cta`}</span>
              </CtaButton>

              <div>
                {projectsJson.map(function (category) {
                  return (
                    <>
                      <h2>{t('projects:' + category.cat_slug + '.name')}</h2>
                      <p>{t('projects:' + category.cat_slug + '.desc')}</p>

                      {category.projects.map(function (project) {
                        return (
                          <ProjectListing project={project} category={category} dict={dict} key={project.slug} />
                        )
                      }
                      )}
                    </>)
                })}
              </div>

              <h2>{t('common:projects.goals.title')}</h2>
              <ul><li>{t('common:projects.goals.points.1.title')}</li></ul>
              <p>{t('common:projects.goals.points.1.description')}</p>
              <ul><li>{t('common:projects.goals.points.2.title')}</li></ul>
              <p>{t('common:projects.goals.points.2.description')}</p>
              <ul><li>{t('common:projects.goals.points.3.title')}</li></ul>
              <p>{t('common:projects.goals.points.3.description')}</p>
              <ul><li>{t('common:projects.goals.points.4.title')}</li></ul>
              <p>{t('common:projects.goals.points.4.description')}</p>
            </ProseContainer>
          </div>
        </Container>
    </>
  )
}
