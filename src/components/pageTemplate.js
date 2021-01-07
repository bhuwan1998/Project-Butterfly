import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import Box from '../components/box';

export default ({title, children}) => (
  <Layout>
    <PageTitle title={title}/>
    <Container className="py-4">
      <Box style={{textAlign: 'left'}}>
      <Row className="d-flex justify-content-center">
        <Col sm={10}>
          {children}
        </Col>
      </Row>
      </Box>
    </Container>
  </Layout>
)
