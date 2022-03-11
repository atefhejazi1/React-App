import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from './Image/Blog2.jpg';
import img2 from './Image/blog3.jpg'
import img3 from './Image/blog4.jpg'
import img4 from './Image/blog5.jpg'
export default function Gri() {
    return <div>
      <section className='section-grid' id='Poems'>
      <center><h1 className='h1-grid'>POEMS</h1></center>
       <div className='div-grid'>
       <Container>
            <Row>
                <Col sm={12} md={6} lg={3}>
                <img src={img1} className='img-fluid' />
                    <h4>"Sunrise"</h4>
                    <p>This is a generic blog article you can use for adding blog content / subjects on your website. You can edit all of this text and replace it with anything you have to say on your blog.</p>
                    <h4>Read More</h4>
                </Col>
                <Col sm={12} md={6} lg={3}>
                <img src={img2} className='img-fluid' />
                    <h4>"The Old OakTree"</h4>
                    <p>This is a generic blog article you can use for adding blog content / subjects on your website. You can edit all of this text and replace it with anything you have to say on your blog.</p>
                    <h4>Read More</h4>
                </Col>
                <Col sm={12} md={6} lg={3}>
                <img src={img3} className='img-fluid' />
                    <h4>"The Deep Forest"</h4>
                    <p>This is a generic blog article you can use for adding blog content / subjects on your website. You can edit all of this text and replace it with anything you have to say on your blog.</p>
                    <h4>Read More</h4>
                </Col>
                <Col sm={12} md={6} lg={3}>
                <img src={img4} className='img-fluid' />
                    <h4>"Twilights"</h4>
                    <p>This is a generic blog article you can use for adding blog content / subjects on your website. You can edit all of this text and replace it with anything you have to say on your blog.</p>
                    <h4>Read More  </h4>
                </Col>
            </Row>
        </Container>
       </div>
      </section>
    </div>;
}