import React from 'react'
import {NormalField} from 'reactstrap-form-fields'
import Button from './btn'
import {Container} from 'reactstrap'

export default () => (
  <Container>
    <div className="Row">
      <div className="col col-md-12 col-sm-9">
        <form name="Contact Form" method="POST" netlify>
        <input type="hidden" name="form-name" value="Contact Form"/>
        <NormalField name="First Name"/>
        <NormalField name="Last Name"/>
        <NormalField name="Email"/>
        <NormalField name="Phone Number"/>
        <NormalField name="Business Enquiry" type="textarea"/>
        <Button type="submit">Submit</Button>
        </form>

      </div>
       

    </div>
    

  </Container>
 
)
