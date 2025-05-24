import menu from '../data/menu'
import qualities from '../data/qualities'
import categories from '../data/categories.js'
import projects from '../data/project.js'
import trombineOrdi from '../assets/trombineOrdi.webp'
import trombineSalut from '../assets/trombineSalut.webp'
import trombineContact from '../assets/trombineContact.webp'
import Qualities from '../components/qualities/Qualities.jsx'
import Trainings from '../components/trainings/Trainings.jsx'
import Projects from '../components/projects/Projects.jsx'
import Modal from '../components/modal/Modal.jsx'
import ModalProject from '../components/modalProject/ModalProject.jsx'
import Form from '../components/form/Form.jsx'
import { useState } from 'react'

const Home = () => {
  const [type, setType] = useState(null)
  const filteredProject = !type? projects : projects.filter(project => project.idCategory === type) ;

  return (
    <main>
      <section className="showing">
        <div className='showing-title'>
          <div className='showing-title-name'>
            <div className='showing-title-name-me'>
              <h1>Magali Civadier</h1>
              <h2>Développeuse frontend</h2>
              <p>ReactJs/Javascript</p>
            </div>
            <div className='showing-title-name-menu'>
              {menu.map(element => (
                <a key={element.id} href={element.source}>{element.name}</a>
              ))}
            </div>
          </div>
          <div className='showing-title-picture'>
            <img src={trombineOrdi} alt='Magali en dessin derrière un ordinateur'/>
          </div>
        </div>
        <div className='showing-icon-link'>
          <a href="https://www.linkedin.com/in/magali-civadier-41870164" target='_blank'><i className='fa-brands fa-linkedin'></i></a>
          <a href="https://github.com/Magdoc64" target='_blank'><i className='fa-brands fa-github'></i></a>
        </div>
      </section>
      <section id='aboutme' className='aboutme'>
        <h2 className='aboutme-title'>Qui suis-je?</h2>
        <div className='aboutme-description'>
          <img src={trombineSalut} alt='Magali en dessin faisant un signe de la main'/>
          <p className='aboutme-description-text'>Hello, <span>développeuse frontend junior JS ES6/React.js</span>, j'aime faire prendre vie à vos projets et vous rendre visible sur la toile au travers du code.<br/>
          Mon passé d'infirmière m'apporte toute <span>la rigueur, l'organisation, et la planification</span> nécessaire à la conduite de projet, et au développement d'un code performant et facilement maintenable.<br/>
          Ma formation UX/UI designer me rend particulièrement <span>sensible aux besoins des utilisateurs et à l'ergonomie des interfaces</span> pour qu'elles soient le plus facile d'utilisation. </p>
        </div>
        <div className='aboutme-quality'>
        {qualities.map(quality => (
          <Qualities key={`${quality.id}`} quality={quality}/>
        ))}
        </div>
      </section>
      <section id='mytraining' className='training'>
        <h2 className='training-title'>Ma formation</h2>
        <Trainings/>
      </section>
      <section id='myproject' className='project'>
        <h2 className='project-title'>Mes projets</h2>
        <div className='project-categories'>
          <div className='project-categories-items' onClick={() => setType(null)}>Tous</div>
          {categories.map(category => (
            <div key={category.id} className='project-categories-items' onClick={()=> setType(category.id)}>{category.name}</div>
          ))}
        </div>
        <div className='project-list'>
          {filteredProject.map(project => (
            <Modal key={project.id} Content={<ModalProject project={project}/>}>
              {({ setIsOpened }) => (
                <Projects  project={project} onClick = {() => setIsOpened(true)}/>
              )}
            </Modal>
          ))}
        </div>
      </section>
      <section id='contactme' className='contact'>
        <h2 className='contact-title'>Me contacter</h2>
        <div className='containerContact'>
          <div className='containerForm'>
            <Form/>
          </div>
          <div className='contact-details'>
            <div className='contact-details-name'>
              <p>Magali Civadier</p>
              <p><i className="fa-solid fa-phone"></i> 06.61.55.95.01</p>
              <p><i className="fa-solid fa-envelope"></i> magali.civadier@icloud.com</p>
              <p><i className="fa-solid fa-house"></i>64000 Pau</p>
            </div>
            <img src={trombineContact} alt="magali avec un signe de main montrant un téléphone"/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
