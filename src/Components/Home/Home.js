import React from 'react';
import'./Home.css'
import { Carousel } from 'react-bootstrap';
import img1 from'../../images/laptop-1.jpg'
import img2 from'../../images/iphone.jpg'
import img3 from'../../images/desktop2.jpg'
import img4 from'../../images/tv.jpg'
import img5 from'../../images/air condition.jpg'
import Inventories from '../Inventories/Inventories';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <div>
          <div className='carousel'>
             <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={img2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Smart Phones</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img3}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Desktop Pc</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Laptop</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="Fourth slide"
    />
    <Carousel.Caption>
      <h3>Smart TV</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img5}
      alt="Fifth slide"
    />
    <Carousel.Caption>
      <h3>Air Condition</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
       </div>
       <div>
           <Inventories></Inventories>
       </div>
       <div className="pt-5">
           <ExtraSection></ExtraSection>
       </div>
        </div>
    );
};

export default Home;