import React from 'react'
import PageTemplate from '../components/pageTemplate'
import Hr from '../components/hr';
import { FaWarehouse, FaBolt, FaPhotoVideo } from 'react-icons/fa';
import {Row, Container} from 'reactstrap';



let Benefit = ({title, content}) => (
  <div className="d-flex mb-4">
    <FaWarehouse size={30} className="text-primary"/>
    <div className="ml-3">
      <h4>{title}</h4>
      <p className="m-0 ">{content}</p>
    </div>
  </div>
)

const Buildings = () => {

  let content = 
     (
      <div className="d-flex mb-4">
        <Container>
        <Row>
        <h3>  Butterfly Buildings <FaWarehouse size={20} className="text-primary"/> </h3>
        </Row>
        <Row>
           <p>
            The aim is to build houses and buildings for our clients like we are building our own. Our team comprises of qualified professionals
            from the building and construction industry. We are a construction company honestly and reliably. Along with high-quality construction 
            work , we offer a much personalised service so that you will directly work with our customer relationship manager who will help you from 
            day one till your keys are handed over.
          </p>
        </Row>
        </Container>
        
       </div>
     )

  return content;
}


const Technology = () => {

  let content = 
     (
      <div className="d-flex mb-4">
        <Container>
        <Row>
        <h3>  Butterfly Technology <FaBolt size={20} className="text-primary"/> </h3>
        </Row>
        <Row>
           <p>
              The aim is to provide consulting and professional services specialized in IT solutions and outsourcing services. 
              Our Services are divided in two sections.
          </p>  
        </Row>
        <Row> 
          <h4> Outsourced Software Development </h4>
          <p> We specialize in Outsourced Software Development. We provide application intergation, Software maintenance and custom software
            development services. Through our partners we provide a team of highly specialized consultants targeting at cost effective and schedule 
            driven solutions with a high quality assurance for the deliverables.
          </p>
          <h4> Quality Assurance and Auditing </h4>
          <p> We have consultants trained by Standards Australia with extensive experience with working in QA related areas in Australia and Overseas. 
            We provide QA services in Software quality assurance, conducting internal auditors, preparing process documentation, conducting quality process 
            checks as well as developing quality management systems.</p>
        </Row>
        </Container>
        
       </div>
     )

  return content;
}

const MediaSolutions = () => {
  let content = 
  (
    <div className="d-flex mb-4">
      <Container>
      <Row>
      <h3>  Butterfly Media Solutions <FaPhotoVideo size={20} className="text-primary"/> </h3>
      </Row>
      <Row>
         <p>
          Our area of expertise is in developing innovative solutions through technology and other media solutions. We focus on delivering 
          products and services which tailor the needs of our clients. We provide a strategic media consultancy service in film production, 
          broadcasting and other sectors of digital media.
        </p>
      </Row>
      </Container>
      
     </div>
   )
   return content 
   
}




export default () => (
  <PageTemplate title="About Us">
   
     
          <h1> About </h1>
          <p> We are a boutique consulting company based in <b>ACT</b> delivering solutions in the field of <b> Project
            Management, Information Technology, Construction and Entertainment </b>. Our consultants have extensive and varied 
            experience in markets of India and Australia. We have special research interest in the field of health information 
            focusing on electronic health records. </p>
            <Hr />
            <br />
          <h1> Our Brands </h1>
          <br />
          <Buildings />
          <Technology />
          <MediaSolutions />
          <Container> 
            <Row> 
              <h3> Careers </h3>
            </Row>
            <Row> 
              <p>If you would like to purse a career with butterfly, please email us your resume at <a href="#">admin@butterflyconsultancy.com.au</a></p> 
            </Row>

          </Container>
          <Hr />

     
  
  </PageTemplate>
 
)
