import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img7 from './Image/blog7.jpg'
export default function About() {
  return <div>
      <section className='section-About' id='About'>
          <center><h2 className='h2-About'>ABOUT ME</h2></center>
      <Container>
            <Row>
                <Col sm={12} md={6} lg={6}>
                <p className='p3'>The About page is the core description of your website. Here is where you let clients know what your website is about. You can edit all of this text and replace it with what you want to write. For example you can let them know how long you have been in business, what makes your company special, what are its core values and more.</p>
                <p className='p4'>Edit your About page from the Pages tab by clicking the edit button.</p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                <img src={img7} className='img-fluid' />
                </Col>
            </Row>
        </Container>
      </section>
  </div>;
}
