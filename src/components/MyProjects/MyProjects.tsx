
import { ChevronRight } from 'lucide-react';

interface MyProjects {
    nameProject: string,
    linkProject: string
}

const MyProjects = (props:MyProjects) => {
    return (
        <>
        <a href={props.linkProject}>
            <div className="w-full p-5 bg-bgDefault dark:bg-bgDefaultDark dark:text-white rounded-xl flex flex-row justify-between group hover:bg-bgHouverOrange dark:hover:bg-bgHouverOrange transition ease-in-out delay-75">
                <label className='font-semibold group-hover:text-white transition ease-in-out delay-75'>{props.nameProject}</label>
                <ChevronRight className='group-hover:text-white transition ease-in-out delay-75' />
            </div>
        </a>
        </>
    )
}

export default MyProjects;