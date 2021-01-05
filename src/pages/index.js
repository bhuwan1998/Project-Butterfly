import React from "react"

import { Container, Row, Col } from 'reactstrap';
import Link from '../components/link';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaBolt, FaHome, FaChartBar } from 'react-icons/fa';
import Slider from '../components/slider';
import Box from '../components/box';
import Hr from '../components/hr';
import Benefits from '../components/benefits';
import styled from 'styled-components';
import HomeFeatures from '../components/homeFeatures';
let StyledBackground = styled.div`
  background: linear-gradient(to bottom,#f9fbfd 0,#fff 100%);
`
 





let Service = ({title, Icon = FaHome}) => (
  <Col>
    <Link to="/">
      <Box>
        <Icon size={30}/>
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
  </Col>
)

export default () => (
  <Layout>
    <SEO title="Butterfly Solutions" />
    <Slider/>
    <Container className="pt-4 d-flex justify-content-center">
      <div className="text-center">
        <h4>Butterfly Solutions</h4>
        <p className="text-muted"> Canberra Based Project Management Company </p>
      </div>
    </Container>
    <Container className="py-5">
      <h2 className="text-center mb-4">Services</h2>
      <Row className="d-flex justify-content-center">
        <Service title="Clients"/>
        <Service title="IT Solutions" Icon={FaBolt}/>
        <Service title="Project Management" Icon={FaChartBar}/>
      </Row>
    </Container>
    <StyledBackground>
      <Benefits/>
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={8}>
              <Box style={{textAlign: 'left'}}>
                <h3 className="text-center">Contents in a Card Format</h3>
                <Hr/>
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledBackground>
    <HomeFeatures/>
  </Layout>
)
