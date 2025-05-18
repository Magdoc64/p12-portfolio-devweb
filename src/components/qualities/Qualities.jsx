import PropTypes from 'prop-types'
import '../qualities/qualities.css'

const Qualities = ({quality}) => {
    return (
        <div className='button'>
            <div className='button-item'>
              <i className={quality.icon}></i>
              <h2>{quality.titre}</h2>
            </div>
            <p className='button-text'>{quality.texte}</p>
        </div>
    )
}

Qualities.propTypes = {
    quality: PropTypes.object
}

export default Qualities