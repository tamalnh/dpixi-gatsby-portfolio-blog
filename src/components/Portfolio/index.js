import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "reactstrap"

import SectionTitle from "../SectionTitle"

import portfolioImage from "../../images/portfolio-1.jpg"

import PortfolioWrapper from "./portfolio.style"

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <Container>
        <Row>
          <Col md="6">
            <SectionTitle title="Portfolio" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="portfolio__item">
              <div className="stack mb-3">
                <span className="btn btn-light mr-2">HTML</span>
                <span className="btn btn-light mr-2">CSS</span>
                <span className="btn btn-light mr-2">React js</span>
                <span className="btn btn-light mr-2">
                  Styled Component
                </span>
              </div>
              <Link to="#" className="portfolio__preview">
                <div className="preview__thumb">
                  <img src={portfolioImage} alt="dpixi portfolio image" />
                </div>
                <h3 className="display-5 mt-3">React contact books</h3>
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="portfolio__item">
              <div className="stack mb-3">
                <span className="btn btn-light mr-2">HTML</span>
                <span className="btn btn-light mr-2">CSS</span>
                <span className="btn btn-light mr-2">React js</span>
                <span className="btn btn-light mr-2">
                  Styled Component
                </span>
              </div>
              <Link to="#" className="portfolio__preview">
                <div className="preview__thumb">
                  <img src={portfolioImage} alt="dpixi portfolio image" />
                </div>
                <h3 className="display-5 mt-3">React contact books</h3>
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="portfolio__item">
              <div className="stack mb-3">
                <span className="btn btn-light mr-2">HTML</span>
                <span className="btn btn-light mr-2">CSS</span>
                <span className="btn btn-light mr-2">React js</span>
                <span className="btn btn-light mr-2">
                  Styled Component
                </span>
              </div>
              <Link to="#" className="portfolio__preview">
                <div className="preview__thumb">
                  <img src={portfolioImage} alt="dpixi portfolio image" />
                </div>
                <h3 className="display-5 mt-3">React contact books</h3>
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="portfolio__item">
              <div className="stack mb-3">
                <span className="btn btn-light mr-2">HTML</span>
                <span className="btn btn-light mr-2">CSS</span>
                <span className="btn btn-light mr-2">React js</span>
                <span className="btn btn-light mr-2">
                  Styled Component
                </span>
              </div>
              <Link to="#" className="portfolio__preview">
                <div className="preview__thumb">
                  <img src={portfolioImage} alt="dpixi portfolio image" />
                </div>
                <h3 className="display-5 mt-3">React contact books</h3>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </PortfolioWrapper>
  )
}

export default Portfolio
