import React from "react";
import styled from 'styled-components';





const StyledNavbarContainer = styled.div`
     width: 100%;   
     background: linear-gradient(358.47deg, #FFFFFF 1.3%, rgba(255, 255, 255, 0.902552) 10.8%, rgba(255, 255, 255, 0) 98.74%), #00E8CE;
     display: flex;
     padding: 8px;
     margin: 0;
     flex-direction: column;
     color: #0A2268;
     


     h2{
      font-family: Unpack;
      font-size: 36px;
      line-height: 24px;
      padding: 8px;
     }
   
`
 const Navbar = () => {
    
    return(
        <StyledNavbarContainer>
          <h2>Cayuela Jean-Loup</h2>
          </StyledNavbarContainer>
    )
}
export default Navbar


