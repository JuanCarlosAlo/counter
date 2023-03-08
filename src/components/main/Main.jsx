import { useState } from "react"
import { StyledButton, StyledButtonContainer, StyledContainer, StyledCounterNumber } from "./styles"

const Main =()=>{

    const [counter, setCounter] = useState(0)

    return(
    <>
        <StyledContainer>
            <h1>Click Counter</h1>
            <StyledCounterNumber>{counter}</StyledCounterNumber>
            <StyledButtonContainer>
            <StyledButton onClick={(e)=>{
                setCounter(counter - 1)
             }} >DECREASE</StyledButton>

            <StyledButton onClick={(e)=>{
                 setCounter(0)
                 }}>RESET</StyledButton>

            <StyledButton onClick={(e)=>{
                setCounter(counter +1)
             }}>INCREASE</StyledButton>
             </StyledButtonContainer>
        </StyledContainer>
        </>
    )
}

export default Main