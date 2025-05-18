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
          <a href=""><i className='fa-brands fa-linkedin'></i></a>
          <a href=""><i className='fa-brands fa-github'></i></a>
        </div>
      </section>
      <section id='aboutme' className='aboutme'>
        <h2 className='aboutme-title'>Qui suis-je?</h2>
        <div className='aboutme-description'>
          <img src={trombineSalut} alt='Magali en dessin faisant un signe de la main'/>
          <p className='aboutme-description-text'>Hello, suite à une reconversion professionnelle, je suis devenue développeuse junior frontend en javascript ES6/ReactJs et intégrateur web. </p>
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
            <form className='contact-form'>
              <div className='contact-form-name'>
                <div className='contact-form-name-lastname'>
                  <label htmlFor='lastName'>Nom</label>
                  <input type='text' id='lastName' name='lastName' required/>
                </div>
                <div className='contact-form-name-firstname'>
                  <label htmlFor='firstName'>Prénom</label>
                  <input type='text' id='firstName' name='firstName'/>
                </div>
              </div>
              <div className='contact-form-contact'>
                <div className='contact-form-contact-email'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' id='email' name='email' required/>
                </div>
                <div className='contact-form-contact-tel'>
                  <label htmlFor='tel'>Téléphone</label>
                  <input type='tel' id='tel' name='tel'/>
                </div>
              </div>
              <div className='contact-form-objet'>
                <label htmlFor='object'>Objet</label>
                <input type='text' id='object' name='object'/>
              </div>
              <div className='contact-form-message'>
                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message'></textarea>
              </div>
              <p className='contact-form-info'>Champs obligatoires</p>
            </form>
            <button className='contact-button'>Envoyer</button>
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
