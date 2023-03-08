import { useState } from "react"
import { StyledButtonContainer, StyledColorButton, StyledColorContainer } from "./styles"

const ColorContainer =()=>{
    const [color,setColor] = useState('gray')

    return(
        <>
        <StyledColorContainer bgColor ={color}> </StyledColorContainer>
        <StyledButtonContainer>
        <StyledColorButton  onClick={()=>{
                setColor('red')
            }}>Red</StyledColorButton>
            <StyledColorButton onClick={()=>{
                setColor('green')
            }}>Green</StyledColorButton>
            <StyledColorButton onClick={()=>{
                setColor('blue')
            }}>Blue</StyledColorButton>
        </StyledButtonContainer>
            
       
        </>
    )
}

export default ColorContainer