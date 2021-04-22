import { Container, LeftContent, MiddleContent, RightContent } from './styles';
import { ReactComponent as FaceBook } from '../../images/icon-facebook.svg'
import { ReactComponent as Instagram } from '../../images/icon-instagram.svg'
import { ReactComponent as Pinterest } from '../../images/icon-pinterest.svg'
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg'


function Footer() {
    return (
        <Container>
            <LeftContent>
                <h1>Shortly</h1>
            </LeftContent>
            <MiddleContent>
                <ul>
                    <h1>Features</h1>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
                <ul>
                    <h1>Resources</h1>
                    <li>Blog</li>
                    <li>Developers </li>
                    <li>Support</li>
                </ul>
                <ul>
                    <h1>Company</h1>
                    <li>Our Team</li>
                    <li>Carrers</li>
                    <li>Contact</li>
                </ul>
            </MiddleContent>
            <RightContent>
                <FaceBook />
                <Instagram />
                <Pinterest />
                <Twitter />

            </RightContent>
        </Container>
    )
}

export default Footer