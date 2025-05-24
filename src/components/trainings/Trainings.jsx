import '../trainings/trainings.css'
import training from '../../data/training'
import skills from '../../data/skill'
import { useState } from 'react'
import SkillList from '../skillList/SkillList'

const Trainings = () => {
    const [idTraining, setIdTraining] = useState(null);

    const filterSkills = !idTraining? null : (skills.filter(skill => skill.idTraining === idTraining))

    return (
        <div className='containerList'>
            <div className='list'>
                {training.map(element => (
                    <div key={element.id} className='list-detail' onClick={()=> setIdTraining(element.id)}>
                        <h4 className='list-detail-title'>{element.name}</h4>
                        <p className='list-detail-place'>{element.place}</p>
                        <p className='list-detail-date'>{element.date}</p>
                    </div>
                ))}
            </div> 
            {filterSkills !== null && (
            <div className='skills'>
                <h3 className='skills-title'>
                    <span>Compétences</span>
                    <span onClick={()=> setIdTraining(null)} className='skills-title-icon'><i className="fa-solid fa-chevron-up"></i></span>
                </h3>
                <div className='skills-list'>
                    {filterSkills.map(filterSkill => (
                        <SkillList key={filterSkill.id} filterSkill={filterSkill}/>
                    ))}
                </div>
            </div>
            )}
        </div>
    )
}

export default Trainings