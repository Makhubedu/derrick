const SkillCard = ({ title, skills, row }: { 
    title: string,
    skills: string[],
    row: string
}) => {

  return (
    <div className={`${row} border-[1px] border-solid border-secondary w-48 first-of-type:h-fit sm:w-full`}>
      <h2 className="flex flex-col gap-2 border-b-[1px] border-solid border-secondary p-2 text-white font-fire font-semibold text-base">{title}</h2>
      <div className="p-2">
        {skills.map((skill, index) => <p className="font-fira text-secondary text-base" key={index}>{skill}</p>)}
      </div>
    </div>
  )
};

export default SkillCard;