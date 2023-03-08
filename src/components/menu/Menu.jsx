import { useState } from "react"
import { StyledMenu, StyledMenuContainer, StyledMenuCross, StyledMenuItem } from "./styles"

const Menu =()=>{
    const [open,setOpen] = useState(false)

    return(
        <>
        <StyledMenuContainer>
        <nav>
            <StyledMenu>
                <StyledMenuItem>ITEM</StyledMenuItem>
                <StyledMenuItem>ITEM</StyledMenuItem>
                <StyledMenuItem>ITEM</StyledMenuItem>
                <StyledMenuItem>ITEM</StyledMenuItem>
            </StyledMenu>
        </nav>
  
        <StyledMenuCross onClick={()=>{
            setOpen(!open)
        }}>X</StyledMenuCross>
        </StyledMenuContainer>
        </>
    )
}

export default Menu