import Container from '@/components/container'
import ProseContainer from '@/components/prose-container'
import Image from 'next/image'

import staffJson from '@/public/assets/staff/stafflist.json';


export default function Staff() {
    return (
        <>
            <Container>

                <div className="container pt-10 px-6 mx-auto">
                    <ProseContainer>
                        <h2>Staff</h2>
                    </ProseContainer>
                    <div className='text-white max-w-4xl mx-auto font-medium'>

                        {staffJson.map((staff, index) => (
                            (typeof staff._legacy === 'undefined') ?
                                <div key={index} className="flex flex-col md:grid md:grid-cols-[150px,1fr] gap-4 mb-10">
                                    <div className="">
                                        <Image src={"/assets/staff/pictures/kodama_" + staff._collabId + ".png"} alt={staff.name} className="w-full rounded-lg" width={150} height={150} />
                                    </div>
                                    <div className="">
                                        <h3 className="text-xl font-bold mb-2">{staff.name}</h3>
                                        <p className="mb-2">{staff.role}</p>
                                        <ul className="flex flex-col gap-1 mb-2">
                                            {staff.realName && <li>Real name: {staff.realName}</li>}
                                            {staff.pronouns && <li>Pronouns: {staff.pronouns}</li>}
                                            {staff.dateOfBirth && <li>Date of birth: {staff.dateOfBirth}</li>}
                                            {staff.placeOfBirth && <li>Place of birth: {staff.placeOfBirth}</li>}
                                        </ul>

                                    </div>
                                    <p className="col-span-2 mt-2 w-full">{staff.description}</p>
                                </div>
                                : null
                        ))}
                    </div>
                    <ProseContainer>
                        <h2>Former Staff</h2>
                        {staffJson.map((staff, index) => (
                            (typeof staff._legacy !== 'undefined') ?
                                <div key={index}>
                                    {staff.name} ({staff.role}, {staff.legacyStatus})
                                </div>
                                : null
                        ))}
                    </ProseContainer>

                </div>
            </Container>
        </>
    )
}