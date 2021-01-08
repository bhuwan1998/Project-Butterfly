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
import MaterialCard from '../components/react-material-card';
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
    <div id="Slider_">
      <Slider title_1="IT Consultancy" content_1="Description"
            title_2="Butterfly Media Solutions" content_2="Description"
            title_3="Butterfly Buildings" content_3="Description" />

    </div>
    
    {/* <Container className="pt-4 d-flex justify-content-center">
      <div className="text-center">
        <h4>Butterfly Solutions</h4>
        <p className="text-muted"> Canberra Based Project Management Company </p>
      </div>
    </Container> */}
    {/* <Container className="py-5">
      <h2 className="text-center mb-4">Services</h2>
      <Row className="d-flex justify-content-center">
        <Service title="Clients"/>
        <Service title="IT Solutions" Icon={FaBolt}/>
        <Service title="Project Management" Icon={FaChartBar}/>
      </Row>
    </Container> */}
    <StyledBackground>
      {/* <Benefits/> */}
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={12}>
              <Box style={{textAlign: 'left'}}>
                <Benefits />
                <p className="">
                  Welcome to buterfly consultancy, where we transform your ideas into solutions. Together, we can help create the base and 
                  run your business using modern technology, corporate strategy and implementation. We help you to create opportunities that 
                  can metamorphose and help you reach your true potential in order to achieve goals. Buttefly also provides comprehensive liaison 
                  strategies with in-depth knwoledge to ensure high quality delivery of solutions that involves a unique and practical approach.
                </p>
                <Hr/>
              </Box>
            </Col>
            </Row>
            </Container>
            <br />
            <Container>
            <Row className="d-flex">
            <Col md={8} xs={12}>
              <Box>
              <MaterialCard />
              </Box> 
            </Col>
            <Col md={4} xs={12}>
              <Box style={{textAlign: 'left'}}>
                <h1 h1-sm> Project Management <FaChartBar size={30} className="text-primary" /></h1> 
                <p> Lorem Ipsum </p>
              </Box>

            </Col>
          </Row>
        </Container>
      </div>
    </StyledBackground>
    <HomeFeatures/>
  </Layout>
)
