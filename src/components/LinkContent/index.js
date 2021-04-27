import { Container, LSDiv, LSInput, LSButton, LinkList, ListItem, CopyButton, AdvancedS, Cards, Card, SvgDiv, Line } from './styles'
import axios from 'axios';
import { useEffect, useState } from 'react';

import { ReactComponent as BG } from '../../images/bg-shorten-desktop.svg'
import { ReactComponent as BG1 } from '../../images/icon-fully-customizable.svg'
import { ReactComponent as BG2 } from '../../images/icon-detailed-records.svg'
import { ReactComponent as BG3 } from '../../images/icon-brand-recognition.svg'


function LinkContent() {
    const [oldLink, setOldLink] = useState('');
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);



    const [oldLinks, setOldLinks] = useState([]);
    const [shortLinks, setShortLinks] = useState([]);
    console.log(oldLinks, shortLinks)



    useEffect(() => {

    })

    function getData() {
        if (oldLink) {
            setVisible(false);
            setLoading(true);
            axios.get(`https://api.shrtco.de/v2/shorten?url=${oldLink}`)
                .then((res) => {
                    const data = res.data
                    setShortLinks(() => [...shortLinks, data.result.short_link]);
                    setOldLinks(() => [...oldLinks, data.result.original_link]);
                    console.log(oldLinks, shortLinks);
                    console.log(data);
                    setOldLink(oldLink);
                })
                .then(() => {
                    setLoading(false);

                })
        } else {
            setVisible(true);
        }
        return;
    }

    function copyToClip(text) {
        navigator.clipboard.writeText(text);
        return (
            alert("Link Copied!")
        )
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
                {visible ? <p>Please add a link...</p> : <></>}
                {loading ? <p>Loading...</p> : <></>}

            </LSDiv>
            <LinkList>

                {oldLinks.map((links, oldLink) => {
                    links = oldLinks[oldLink];
                    oldLink = shortLinks[oldLink];
                    return (
                        <ListItem key={links}>
                            <h4><a href={links}>{links}</a></h4>
                            <p><a href={oldLink}>{oldLink}</a></p>
                            <CopyButton onClick={() => copyToClip(oldLink)}>Copy</CopyButton>
                        </ListItem>
                    )
                }
                )}

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