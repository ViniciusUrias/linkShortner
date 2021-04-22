import { Container, LSDiv, LSInput, LSButton, LinkList, ListItem, CopyButton, AdvancedS, Cards, Card, SvgDiv, Line } from './styles'
import axios from 'axios';
import { useState } from 'react';

import { ReactComponent as BG } from '../../images/bg-shorten-desktop.svg'
import { ReactComponent as BG1 } from '../../images/icon-fully-customizable.svg'
import { ReactComponent as BG2 } from '../../images/icon-detailed-records.svg'
import { ReactComponent as BG3 } from '../../images/icon-brand-recognition.svg'


function LinkContent() {
    const [oldLink, setOldLink] = useState("");
    const [newLink, setNewLink] = useState("");
    const shortLinks = [];

    function getData() {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${oldLink}`)
            .then((res) => {
                const data = res.data;
                setNewLink(data.result.short_link2);
                shortLinks.push(newLink);
                console.log(data);
            })
        return;
    }


    return (
        <Container>
            <LSDiv>
                <BG />
                <LSInput onChange={(e) => setOldLink(e.target.value)} value={oldLink} placeholder="Shorten a link here...">

                </LSInput>
                <LSButton type="submit" onClick={() => getData()}>
                    Shorten It!
                </LSButton>


            </LSDiv>

            <LinkList>
                <ListItem>
                    <h4>Https://facebook.com.br</h4>
                    <p>https://aaa.bbb/dasdsa</p>
                    <CopyButton>Copy</CopyButton>
                </ListItem>
                <ListItem>
                    <h4>Https://facebook.com.br</h4>
                    <p>https://aaa.bbb/dasdsa</p>
                    <CopyButton>Copy</CopyButton>
                </ListItem>
                <ListItem>
                    <h4>Https://facebook.com.br</h4>
                    <p>https://aaa.bbb/dasdsa</p>
                    <CopyButton>Copy</CopyButton>
                </ListItem><ListItem>
                    <h4>Https://facebook.com.br</h4>
                    <p>https://aaa.bbb/dasdsa</p>
                    <CopyButton>Copy</CopyButton>
                </ListItem>

            </LinkList>
            <AdvancedS>
                <h1>Advanced Statistcs</h1>
                <p>Track how your links are performing accross the web with
                our advanced statistics dashboard
                    </p>
            </AdvancedS>
            <Cards>

                <Card>
                    <SvgDiv>
                        <BG3 />
                    </SvgDiv>
                    <h1>Brand Recognition</h1>
                    <p>Boost your brand recognition with each click. Generic links
                    don't mean a thing. Branded links help instil confidence in
                    your content.
                    </p>
                </Card>
                <Line />
                <Card>
                    <SvgDiv>
                        <BG2 />

                    </SvgDiv>
                    <h1>Detailed Records</h1>
                    <p>Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions
                    </p>
                </Card>
                <Line />
                <Card>
                    <SvgDiv>
                        <BG1 />
                    </SvgDiv>


                    <h1>Fully Customizable</h1>
                    <p>Improve brand awareness and content discoverability throug
                    customizable links, supercharging audience engagement
                    </p>
                </Card>
            </Cards>
        </Container>
    );
}

export default LinkContent;