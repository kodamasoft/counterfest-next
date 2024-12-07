import Link from 'next/link'

export default function ProjectListing({ project }) {
    function t(key) { //teehee debug
        return key;
    }

	function statusBadgeStyles(status) {
		let styles = "inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded-full text-base";
	
		switch (status) {
			case 'completed':
				styles += " bg-purple-500/70"
				break;
			case 'ongoing':
				styles += " bg-green-500/70"
				break;
			case 'accepting':
				styles += " bg-yellow-600/70"
				break;
			case 'cancelled':
				styles += " bg-red-500/70"
				break;
			case 'about-to-release':
				styles += " bg-orange-500/70"
				break;
			default:
				styles += " bg-gray-500/70"
				break;
		}
		return styles	
	}

	return (
		<Link href={"/projects/"+project.slug.current} key={project.slug.current} className="flex flex-col text-center no-underline not-prose md:max-w-2xl mx-auto content-center rounded-xl my-5 transition py-5 px-10 relative hover:-translate-y-1 clip-notched" style={{backgroundColor : project.color+ "44"}}>
		
				<h3 className="text-2xl font-semibold mt-0">
					{project.title}
				</h3>
				<p className='font-normal text-base'>
                    themez: {project.themes}
					{/* {t('projects:common.themes')}: {t('projects:' + category.cat_slug + '.' + project.slug + '.themes')} */}
				</p>
				<p>
					<span className={statusBadgeStyles(project.status)}>{project.status}</span> | {project.percentage}% |{' '}
					{project.duration}
				</p>
				<div className="w-full border border-1 border-white/50 h-2 rounded-full overflow-hidden mt-2 p-0 m-0">
					<div
						className="h-full rounded-full p-0 m-0"
						style={{ 
							width: project.percentage + '%',
							backgroundColor: project.color 
						}}
					></div>
				</div>
				{project.deadline && <p>{t('projects:common.deadline')}: {project.deadline}</p>}
			
		</Link>
	)
}
