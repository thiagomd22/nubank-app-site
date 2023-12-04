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
            <UserInformationContainer>
                <h3>Olá, Thiago Meireles </h3>
                <div>
                    <h3>Conta  00000000-0</h3>
                    <IconButton onClick={() => setIsWageVisible(!isWageVisible)}>
                    {isWageVisible ? (
                        <img src='/eye.svg' alt='cover' />
                        ) : (
                        <img src='/eye-slash.svg' alt='show' />
                        )}  
                    </IconButton>
                </div>
                <WageSkeleton 
                    animate={isWageVisible ? 'closed' : 'open'}
                    variants={wageVariants}
                />
                <h1>R$ 1.237,07</h1>
            </UserInformationContainer>

            <AnnounceCard>
                <p>Veja os descontos que preparamos para você no <span>Shopping Nubank.</span></p>
            </AnnounceCard>
            
            <AnnounceCard>
                <p><span>25% de desconto</span> em empréstimo com portabilidade de salário.</p>
            </AnnounceCard>
        </Container>
    )
}