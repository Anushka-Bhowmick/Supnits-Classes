// CarouselComponent.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './CarouselComponent.css'; // Import CarouselComponent styles
const CarouselComponent = ({ images }) => {
    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 carousel-image"
                        src={image.src}
                        alt={image.alt}
                    />
                    <Carousel.Caption>
                        <h3>{image.caption}</h3>
                        <p>{image.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
