import '../trainings/trainings.css'
import training from '../../data/training'
import skills from '../../data/skill'
import { useState } from 'react'
import yellowStar from '../../assets/etoile-coloree.png'
import greyStar from '../../assets/star-grey.png'

const Trainings = () => {
    const [edit, setEdit] = useState(false);
    const [idTraining, setIdTraining] = useState(null);
    const token = localStorage.getItem('usertoken');

    if (token!== null){
        setEdit(true)
    }
    
    const filterSkills = !idTraining? null : (skills.filter(skill => skill.idTraining === idTraining))
    
    const range = [1,2,3,4,5]

    return edit===true? (
        <div className='containerList'>
            <div className='list'>
                <div className='list-detail'>
                    <h4 className='list-detail-title'>Ajouter</h4>
                    <div className='list-detail-icon'>+</div>
                </div>
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
                    <span onClick={()=> setIdTraining(null)} className='skills-title-icon'><i class="fa-solid fa-chevron-up"></i></span>
                </h3>
                <div className='skills-list'>
                    {filterSkills.map(filterSkill => (
                    <div key={filterSkill.id} className='skills-list-card'>
                        <p className='skills-list-card-name'>{filterSkill.name}</p>
                        <div className='skills-list-card-rating'>
                            {range.map(rangeElement => rangeElement <= filterSkill.rating ?(
                            <span key={rangeElement.toString()}><img src={yellowStar} alt='etoile coloree'/></span> 
                            ):null)}
                            {range.map(rangeElement => (5 - filterSkill.rating) > range.indexOf(rangeElement)?(
                                <span key={`${range.indexOf(rangeElement)}-${rangeElement.toString()}`}><img src={greyStar} alt='étoile grise'/></span>
                            ):null)}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            )}
        </div>
    ):(
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
                    <span onClick={()=> setIdTraining(null)} className='skills-title-icon'><i class="fa-solid fa-chevron-up"></i></span>
                </h3>
                <div className='skills-list'>
                    {filterSkills.map(filterSkill => (
                    <div key={filterSkill.id} className='skills-list-card'>
                        <p className='skills-list-card-name'>{filterSkill.name}</p>
                        <div className='skills-list-card-rating'>
                            {range.map(rangeElement => rangeElement <= filterSkill.rating ?(
                                <span key={rangeElement.toString()}><img src={yellowStar} alt='etoile coloree'/></span> 
                            ):null)}
                            {range.map(rangeElement => (5 - filterSkill.rating) > range.indexOf(rangeElement)?(
                                <span key={`${range.indexOf(rangeElement)}-${rangeElement.toString()}`}><img src={greyStar} alt='étoile grise'/></span>
                            ):null)}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            )}
        </div> 
    )
}

export default Trainings