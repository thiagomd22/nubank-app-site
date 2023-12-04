import { SignOutButton } from "../Buttons"
import { Container } from "./style"

export const Header = () => {
    return(
        <Container>
            <img src="/nubanklogo.svg" alt="Logo Nubank" />

            <SignOutButton />
        </Container>
    )
}