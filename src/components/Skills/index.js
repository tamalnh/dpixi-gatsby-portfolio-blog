import React from "react"
import { Container, Row, Col } from "reactstrap"

import SectionTitle from '../SectionTitle'

import SkillsWrapper from "./skills.style"

const Skills = () => {
  return (
    <SkillsWrapper>
      <Container>
        <Row>
          <Col md={4}>
            <SectionTitle title="Skill" />
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <div className="skill__item">
              <span>HTML</span>
            </div>
          </Col>
          <Col md="3">
            <div className="skill__item">
              <span>CSS</span>
            </div>
          </Col>
          <Col md="3">
            <div className="skill__item">
              <span>Javascript</span>
            </div>
          </Col>
          <Col md="3">
            <div className="skill__item">
              <span>React js</span>
            </div>
          </Col>
          <Col md="3">
            <div className="skill__item">
              <span>Next js</span>
            </div>
          </Col>
          <Col md="3">
            <div className="skill__item">
              <span>Gatsby js</span>
            </div>
          </Col>
          <Col md="3">
            <div className="skill__item">
              <span>Node js</span>
            </div>
          </Col>
          <Col md="3">
            <div className="skill__item">
              <span>Graphql</span>
            </div>
          </Col>
        </Row>
      </Container>
    </SkillsWrapper>
  )
}

export default Skills
