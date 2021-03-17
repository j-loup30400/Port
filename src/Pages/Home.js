import React from "react"
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import Project1 from '../Images/pik-a-chew.png';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';



const StyledAboutContainer = styled.div`
 width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(360deg, #FFFFFF -2.86%, rgba(255, 255, 255, 0) 58.69%), #FED677;
    color: #0A2268;

  h1{
    text-align: center; 
       font-family: unpack;
       line-height: 54px;
       font-size: 52px;
       color: #0A2268;

  }

  p{
    font-family: Poor Story;
    font-size: 26px;
    line-height: 54px;
    text-align: center;
    font-weight: bold;
    padding: 8px;
  }
`
 const StyledProjectContainer = styled.div`
 width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0.791667) 5.17%, rgba(255, 255, 255, 0) 24.83%), #00E8CE;

    h1{
    text-align: center;  
       font-family: unpack;
       line-height: 54px;
       font-size: 52px;
       color: #0A2268;
    }
 `  

const ExtendedCarousel = styled(Carousel)`
 

`

const StyledFooterContainer = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #CDFAF5;
    padding: 8px;
   


    h1{
      text-align: center; 
       position: top;
       font-family: unpack;
       line-height: 54px;
       font-size: 52px;
       color: #0A2268;
    }

    svg{
      
       width: 50px;
      height: 50px;
      color: #0A2268;
      
      
    }

    h3{
      display: flex;
      flex-direction:row;
    justify-content: space-around;}
`
 


const Home = () => {
    return (
        <>
          <StyledAboutContainer>
            <section>
            <h1>About Me</h1>
            <p>
            Front-end and UX/UI design are exciting career because it's always evolving and constantly changing. This means you'll always have the opportunity to interact with new tools and learn new skills, keeping you engaged in your career. It's a field that provide many opportunities for hands-on-learning. 
            </p>
           </section>
            </StyledAboutContainer> 
           <StyledProjectContainer>
             <h1>Projects</h1>
             {/* <ExtendedCarousel>
            
             <div><img src={Project1} alt="PikaChew" /></div>
             
             
             </ExtendedCarousel> */}
             </StyledProjectContainer>       
             <StyledFooterContainer>
             <footer>
               <h1>Social</h1>
              <h3> <a href="https://www.linkedin.com/in/jeanloup-cayuela-467165204/"><AiFillLinkedin/></a> <a href="https://github.com/j-loup30400"><AiFillGithub /></a> </h3>
             </footer>
             </StyledFooterContainer>
          </>
    );
  }



  export default Home