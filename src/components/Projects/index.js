import React from 'react'
import {ProjectsContainer,ProjectsH1,ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP} from './projectsElements'
import Icon1 from '../../images/svg-5.svg'
import Icon2 from '../../images/svg-6.svg'
import { Button } from '../ButtonElement'

const Projects = () => {
    return (
        <ProjectsContainer id= "projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1} />
                    <ProjectsH2>LQN</ProjectsH2>
                    <ProjectsP>Desarrollamos un prototipo de un modelo de tarjeta de puntuación de crédito basado en herramientas de aprendizaje automático utilizando bibliotecas de TensorFlow y Keras que querían estimar las probabilidades de rechazo de préstamos hipotecarios en función de las características de los clientes.</ProjectsP>
                    <Button href= "https://www.instagram.com/analytics.club.ac/">Learn More</Button>
                </ProjectsCard>
                <ProjectsCard >
                    <ProjectsIcon  src={Icon2} />
                    <ProjectsH2 > Stocks Portfolio Analysis  </ProjectsH2>
                    <ProjectsP>Se implementó un script de Python usando el cuaderno Jupyter para estimar la volatilidad y los retornos esperados promedio de la cartera. Se aplicó algoritmos de optimización para maximizar el rendimiento esperado de la cartera e implementé modelos econométricos avanzados para estimar los precios de las acciones.</ProjectsP>
                    <Button href= "https://www.instagram.com/analytics.club.ac/">Learn More</Button>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>

    )
}

export default Projects
