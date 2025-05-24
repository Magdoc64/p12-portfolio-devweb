import PropTypes from "prop-types";
import '../skillList/skillList.css'
import yellowStar from '../../assets/etoile-coloree.png'
import greyStar from '../../assets/star-grey.png'

const SkillList = ({filterSkill}) => {
    const range = [1,2,3,4,5]
    const detailSkills = filterSkill.detail;

    return (
        <div className='card'>
                <h4 className='card-name'>{filterSkill.name}</h4>
                {detailSkills.map(detailSkill => (
                    <div key={detailSkill.id} className='card-list'>
                        <p className="card-list-title">{detailSkill.name}</p>
                        <div className="card-list-rating">
                        {range.map(rangeElement => rangeElement <= detailSkill.rating ?(
                            <span key={rangeElement.toString()}><img src={yellowStar} alt='etoile coloree'/></span> 
                        ):null)}
                        {range.map(rangeElement => (5 - detailSkill.rating) > range.indexOf(rangeElement)?(
                            <span key={`${range.indexOf(rangeElement)}-${rangeElement.toString()}`}><img src={greyStar} alt='étoile grise'/></span>
                        ):null)}
                        </div>
                    </div>
                ))}
        </div>
    )
}

SkillList.propTypes = {
  filterSkill: PropTypes.object.isRequired,
}

export default SkillList