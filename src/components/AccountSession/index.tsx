import React from "react";
import { IconButton } from "../Buttons";
import { AnnounceCard, Container, UserInformationContainer, WageSkeleton } from "./style";


const wageVariants = {
    open: {width: '100%', opacity: [0, 1, 1] },
    closed: { width: '0', opacity: [1, 0, 0] },
}

export const AccountSession = () => {
    
    const [isWageVisible, setIsWageVisible] = React.useState<boolean>(true);
    
    return(
        <Container>
            
        </Container>
    )
}