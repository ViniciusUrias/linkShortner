import { Container, GetStartedButton, TextDiv } from './styles'
import { ReactComponent as BG } from '../../images/bg-boost-desktop.svg'
function BottomContent() {
    return (
        <Container>
            <BG />
            <TextDiv>
                <h1>
                    Boost your links today
                </h1>
                <GetStartedButton>
                    Get Started
            </GetStartedButton>
            </TextDiv>

        </Container>
    )
}

export default BottomContent