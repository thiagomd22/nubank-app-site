import { Container, Option } from "./style"

export const Menu = () => {
    return (
        <Container>
            <Option>
                <div>
                    <img src="/question-circle.svg" alt="help" />
                    <p>Me ajude</p>
                </div>
                <img src="/angle-right-b.svg" alt="arrow"/>
            </Option>
        </Container>
    )
}

