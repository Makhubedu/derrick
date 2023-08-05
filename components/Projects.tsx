import ProjectCard from './ProjectCard';
import { projects } from '@/app/_local/projects';

const Projects = () => {

  return (
    <div className=' flex justify-center flex-wrap gap-4'>
      {projects.map((project, index)=> (
        <ProjectCard key={index} image='/images/derrick-image.png' link={project.link} skills={project.skills} projectName={project.projectName} description={project.description}/>
      ))}
    </div>
  )
};

export default Projects;