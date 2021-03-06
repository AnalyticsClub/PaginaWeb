import styled from 'styled-components'

export const ProjectsContainer = styled.div`
 height: 800px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: #010606;


 @media screen and (max-width: 768px){
     height: 1500px;
 }

 @media screen and (max-width: 480px){
     height: 2000px;
 }
`

export const ProjectsWrapper = styled.div`
 max-width: 1000px;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr;
 align-items: center;
 grid-gap: 16px;
 padding: 0 50px;

 @media screen and (max-width: 1000px){
     grid-template-columns: 1fr 1fr;
 }

 @media screen and (max-width: 768px){
     grid-template-columns: 1fr;
     padding: 0px;
 }

`
export const ProjectsCard = styled.div`
 background: #fff;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 border-radius: 10px;
 height: 500px;
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
export const ProjectsIcon = styled.img`
 max-height: 200px;
 max-width: 200px;
 margin-bottom: 30px;
 
`

export const ProjectsH1 = styled.h1`
 font-size: 2.5rem;
 color: #fff;
 margin-bottom: 64px;

 @media screen and (max-width: 480px){
    font-size: 2rem;

 }

`
export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  justify-content: center;

`
export const ProjectsP = styled.p`
  margin-bottom: 15px;
  font-size: 1rem;
  text-align: left;
`

