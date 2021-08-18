import React from 'react'
import {MembersContainer,MembersH1,MembersWrapper, MembersCard, MembersIcon, MembersH2, MembersH3} from './membersElements'
import Miembro1 from '../../images/Maria_Lopez.png'
import Miembro2 from '../../images/Martin_Alvarez.png'
import Miembro3 from '../../images/Emilio_Ceballos.png'
import Miembro4 from '../../images/Nicolas_Bejar.png'
import Miembro5 from '../../images/Camilo_Falla.png'
import Miembro6 from '../../images/Nicolas_Mejia.png'
import Miembro7 from '../../images/Federico_Wiesner.png'
import Miembro8 from '../../images/Ma_Silva.png'
import Miembro9 from '../../images/Daniel_Santamaria.png'
import Miembro10 from '../../images/Carlos_Erazo.png'
import Miembro11 from '../../images/Juan_Prieto.png'
import Miembro12 from '../../images/Andres_Tellez.png'





const Members = () => {
    return (
        <MembersContainer id= "members">
            <MembersH1>Members</MembersH1>
            <MembersWrapper>
                <MembersCard>
                    <MembersIcon src={Miembro1} />
                    <MembersH2>María López</MembersH2>
                    <MembersH3>Co-Founder</MembersH3>
                </MembersCard>
                <MembersCard>
                    <MembersIcon src={Miembro2} />
                    <MembersH2>Martín Álvarez</MembersH2>
                    <MembersH3>Co-Founder</MembersH3>
                </MembersCard>
                <MembersCard>
                    <MembersIcon src={Miembro3} />
                    <MembersH2>Emilio Ceballos</MembersH2>
                    <MembersH3>Co-Founder</MembersH3>
                </MembersCard>
                <MembersCard>
                    <MembersIcon src={Miembro4} />
                    <MembersH2>Nicolás Bejar</MembersH2>
                    <MembersH3>Board Member</MembersH3>
                </MembersCard>
                <MembersCard>
                    <MembersIcon src={Miembro5} />
                    <MembersH2>Camilo Falla</MembersH2>
                    <MembersH3>Board Member</MembersH3>
                </MembersCard>
                <MembersCard>
                    <MembersIcon src={Miembro6} />
                    <MembersH2>Nicolás Mejía</MembersH2>
                    <MembersH3>Board Member</MembersH3>
                </MembersCard>
                <MembersCard>
                    <MembersIcon src={Miembro7} />
                    <MembersH2>Federico Wiesner</MembersH2>
                    <MembersH3>Presidente</MembersH3>
                </MembersCard>
                <MembersCard>
                    <MembersIcon src={Miembro8} />
                    <MembersH2>María A. Silva</MembersH2>
                    <MembersH3>Vice-Presidenta</MembersH3>
                </MembersCard>
                <MembersCard>
                    <MembersIcon src={Miembro9} />
                    <MembersH2>Daniel Santamaría</MembersH2>
                    <MembersH3>Líder de Impacto</MembersH3>
                </MembersCard>
                <MembersCard>
                    <MembersIcon src={Miembro10} />
                    <MembersH2>Carlos Erazo</MembersH2>
                    <MembersH3>Líder de Empresas</MembersH3>
                </MembersCard>
                <MembersCard>
                    <MembersIcon src={Miembro11} />
                    <MembersH2>Juan Diego Prieto</MembersH2>
                    <MembersH3>Co-Líder de Empresas</MembersH3>
                </MembersCard>
                <MembersCard>
                    <MembersIcon src={Miembro12} />
                    <MembersH2>Andrés F. Tellez</MembersH2>
                    <MembersH3>Líder de Emprendimientos</MembersH3>
                </MembersCard>
            </MembersWrapper>
        </MembersContainer>

    )
}

export default Members
