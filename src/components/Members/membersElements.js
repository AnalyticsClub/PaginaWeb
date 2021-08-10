import styled from 'styled-components'

export const MembersContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: white;

`

export const MembersWrapper = styled.div`
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 align-items: center;
 grid-gap: 16px;
 padding: 0 30px;

 @media screen and (max-width: 1300px){
     grid-template-columns: 1fr 1fr 1fr;
 }

 @media screen and (max-width: 1000px){
     grid-template-columns: 1fr 1fr;
 }

 @media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    padding: 0px;
 }

 @media screen and (max-width: 500px){
    grid-template-columns: 1fr;
    padding: 0px;
 }

`
export const MembersCard = styled.div`
 background: lightgray;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 border-radius: 10px;
 max-height: 400px;
 padding: 30px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;
 margin: 25px 25px 25px 25px;



 &:hover {
     transform: scale(1.02);
     transition: all 0.2s ease-in-out;
     cursor: pointer;
 }

`
export const MembersIcon = styled.img`
 max-height: 200px;
 max-width: 200px;
 margin-bottom: 30px;
 
`

export const MembersH1 = styled.h1`
 font-size: 2.5rem;
 color: #219DFF;
 margin-top: 30px;

 margin-bottom: 64px;

 @media screen and (max-width: 480px){
    font-size: 2rem;

 }

`
export const MembersH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  justify-content: center;
  color: black;
  

`
export const MembersH3 = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  justify-content: center;
  color: #219DFF;

`

