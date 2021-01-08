import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

let StyledFeature = styled.div`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition-duration: 0.25s;
  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.20);
  }
`



let Feature = ({title, description, img}) => (
  <Col md={4}>
    <StyledFeature>
      <Img src="src/assets/images/slide1.jpg" fluid/>
      <div className="p-3">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </StyledFeature>
  </Col>
)

export default () => {
  
  return (
    <Container className="py-5">
      <Row>
        <Feature title="Learn More" description="" />
        <Feature title="Social Media" description="" />
        <Feature title="Mission" description="" />
      </Row>
    </Container>
  )
}
