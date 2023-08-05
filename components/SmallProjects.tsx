import SmallProjectCard from './SmallProjectCard';
import { small_projects } from '@/app/_local/small_projects';


const Projects = () => {

  return (
    <div className=' flex justify-center flex-wrap gap-4'>
      {small_projects.map((project, index)=> (
        <SmallProjectCard key={index} link={project.link} skills={project.skills} projectName={project.projectName} description={project.description}/>
      ))}
    </div>
  )
};

export default Projects;