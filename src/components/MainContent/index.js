import { Container, Svg, Title, GetStartedButton, SpaceContent } from './styles'
import { ReactComponent as BG } from '../../images/illustration-working.svg'
function MainContent() {

    return (

        <Container>

            <Title>
                <h1>More than just shorter links</h1>
                <p>Build your brand´s recognition and get detailed insights on how your links are performing</p>

                <GetStartedButton>Get Started</GetStartedButton>
            </Title>
            <SpaceContent />
            <Svg>
                <BG />
            </Svg>

        </Container>

    )
}

export default MainContent;