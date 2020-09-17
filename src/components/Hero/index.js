import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaSkype
} from 'react-icons/fa'

import AvatarImg from '../../images/me.jpg'

import {
    HeroWrapper,
    HeroBackground,
    HeroContent,
    SocialIcons,
    HeroAvatar
} from './hero.style';

const Hero = () => {
    return (
        <HeroWrapper as="section">
            <Container>
                <HeroBackground>
                    <Row>
                        <Col md={{ size: 8, offset: 2 }}>
                            <HeroContent>
                                <h1>Hello, my name is John Doe</h1>
                                <p>I am a frontend developer and UI designer, Look at my portfolio blew</p>
                                <SocialIcons>
                                    <a href="#" target="_blank"> <FaFacebook /> </a>
                                    <a href="#" target="_blank"> <FaTwitter /> </a>
                                    <a href="#" target="_blank"> <FaLinkedin /> </a>
                                    <a href="#" target="_blank"> <FaSkype /> </a>
                                </SocialIcons>

                                
                            </HeroContent>
                        </Col>
                    </Row>
                </HeroBackground>

                <HeroAvatar>
                                    <img src={AvatarImg} alt="Me" />
                                </HeroAvatar>
            </Container>
        </HeroWrapper>
    )
}

export default Hero;