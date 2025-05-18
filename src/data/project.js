import P6 from "../assets/P6-architecte.webp"
import P7 from "../assets/P7-kasa.webp"
import P10 from "../assets/P10-Argentbank.webp"
import P8 from "../assets/P8-Optimisation.webp"
import P9 from "../assets/P9-debuggage.webp"
import FAQ from "../assets/faq.webp"
import Anteis from "../assets/anteis.webp"

const projects = [
    {
        id:1,
        idCategory:2,
        category:"Frontend",
        name:"Portfolio Architecte",
        technic:["HTML","CSS","JS"],
        description:"Conception d'un portfolio à l'aide d'une API avec système de connexion, ajout/suppression de nouveaux projets",
        sourceImage:P6,
        link: "https://github.com/Magdoc64/FrontEnd.git"
    },
    {
        id:2,
        idCategory:2,
        category:"Frontend",
        name:"Appli Location de logements",
        technic:["React"],
        description:"Conception d'une appli de location de logements en singlePage",
        sourceImage:P7,
        link:"https://github.com/Magdoc64/P7-Kasa.git"
    },
    {
        id:3,
        idCategory:2,
        category:"Frontend",
        name:"Appli d'une agence bancaire",
        technic:["React","Redux"],
        description:"Conception du système de connexion d'une appli d'agence bancaire à l'aide d'une API avec mise en place d'un management d'état",
        sourceImage:P10,
        link:"https://github.com/Magdoc64/P10-ArgentBank-Frontend.git"
    },
    {
        id:4,
        idCategory:3,
        category:"SEO",
        name:"SEO - Portfolio Photographe",
        technic:["HTML","CSS","Ligthouse"],
        description:"Optimisation d'un portfolio avec amélioration du référencement local",
        sourceImage:P8,
        link:"https://magdoc64.github.io/P8-ninacarducci/"
    },
    {
        id:5,
        idCategory:4,
        category:"Debuggage",
        name:"Debuggage d'un site",
        technic:["React","React devTool","Jest"],
        description:"Debuggage d'un site d'agence évènementielle avec analyse des anomalies, correction et réalisation de tests unitaires",
        sourceImage:P9,
        link:"https://github.com/Magdoc64/p9-debugger-site-evenementiel.git"
    },
    {
        id:6,
        idCategory:1,
        category:"UX/UI designer",
        name:"Amélioration d'une FAQ",
        technic:["Tests utilisateurs","Conception interface"],
        description:"Analyse d'une foire aux questions, réalisation de tests utilisateurs et proposition d'interface en vue d'améliorer l'outil",
        sourceImage:FAQ,
        link:""
    },
    {
        id:7,
        idCategory:1,
        category:"UX/UI designer",
        name:"Refonte d'un site",
        technic:["Tests utilisateurs","Maquettage","Spécifications"],
        description:"En vue de la refonte d'un site pour un cabinet d'ergonomie, analyse de l'existant, tests utilisateurs et maquettage de la proposition du nouveau site. En finalité, élaboration d'un cahier des charges à destination du webmaster",
        sourceImage:Anteis,
        link:"https://anteis.net/"
    },

]

export default projects

