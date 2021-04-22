import { Container, LeftContent, MiddleContent, RightContent, LoginButton, RegisterButton } from './styles.js'
function TopBar() {
    return (
        <Container>
            <LeftContent>
                <h1>Shortly</h1>
                <h3>Features</h3>
                <h3>Pricing</h3>
                <h3>Resources</h3>
            </LeftContent>
            <MiddleContent />
            <RightContent>
                <LoginButton>
                    Login
                </LoginButton>
                <RegisterButton>
                    Sign Up
                </RegisterButton>
            </RightContent>
        </Container>
    )
};

export default TopBar