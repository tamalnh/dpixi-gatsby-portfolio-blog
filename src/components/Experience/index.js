import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SectionTitle from '../SectionTitle'

import ExperienceWrapper from './experience.style'

const Experience = () => {
    return(
        <ExperienceWrapper>
            <Container>
                <Row>
                    <Col md="6">
                        <SectionTitle title="Experience" />
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <div className="experience__block">
                            <span className="type"> Part Time </span>
                            <h4> Photo Retoucher </h4>
                            <span className="position">Clipmaze - Dhaka, Bangladesh - 2014-2020</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus deserunt minima voluptatum reprehenderit doloribus atque natus a quam ad.</p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="experience__block">
                            <span className="type"> Part Time </span>
                            <h4> Photo Retoucher </h4>
                            <span className="position">Clipmaze - Dhaka, Bangladesh - 2014-2020</span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus deserunt minima voluptatum reprehenderit doloribus atque natus a quam ad.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </ExperienceWrapper>
    )
}

export default Experience;