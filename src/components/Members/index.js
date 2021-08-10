import React from 'react'
import {MembersContainer,MembersH1,MembersWrapper, MembersCard, MembersIcon, MembersH2, MembersH3} from './membersElements'
import Miembro1 from '../../images/Maria_Lopez.png'
import Miembro2 from '../../images/Martin_Alvarez.png'
import Miembro3 from '../../images/Emilio_Ceballos.png'
import Miembro4 from '../../images/Nicolas_Bejar.png'
import Miembro5 from '../../images/Camilo_Falla.png'
import Miembro6 from '../../images/Nicolas_Mejia.png'


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
            </MembersWrapper>
        </MembersContainer>

    )
}

export default Members
