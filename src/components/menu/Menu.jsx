import { useState } from "react"
import { StyledMenu, StyledMenuContainer, StyledMenuCross, StyledMenuItem } from "./styles"

const Menu =()=>{
    const [open,setOpen] = useState(false)

    return(
        <>
        <StyledMenuContainer>
        <StyledMenuCross onClick={()=>{
            setOpen(!open)
        }}>X</StyledMenuCross>
        <nav>
            <StyledMenu state={open}>
                <StyledMenuItem>ITEM</StyledMenuItem>
                <StyledMenuItem>ITEM</StyledMenuItem>
                <StyledMenuItem>ITEM</StyledMenuItem>
                <StyledMenuItem>ITEM</StyledMenuItem>
            </StyledMenu>
        </nav>
  
       
        </StyledMenuContainer>
        </>
    )
}

export default Menu