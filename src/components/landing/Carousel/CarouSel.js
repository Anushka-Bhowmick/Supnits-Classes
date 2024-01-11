import Carousel from 'react-bootstrap/Carousel';
import CarouselSt from './Carousel.module.css';

function CarouSel() {
    return (
        <Carousel data-bs-theme="dark" >
            <Carousel.Item>
                <img
                    className="d-block w-100 " style={{ height: "60vh" }}
                    src="/static/media/hero.a9b57f7fc78a6c0adc53d4c82950f6ce.svg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={CarouselSt.Carousel_Caption}>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 " style={{ height: "60vh" }}
                    src="/static/media/c2.55d1c318b143671e0ff7522fa1814fe9.svg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className={CarouselSt.Carousel_Caption}>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 " style={{ height: "60vh" }}
                    src="/static/media/c4.ac631abaec91e2b7153b5c496937ba56.svg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <div className={CarouselSt.Carousel_Caption}>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 " style={{ height: "60vh" }}
                    src="/static/media/c1.608155f70cea40574a0f914a16de3bc8.svg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <div className={CarouselSt.Carousel_Caption}>
                        <h5>Fourth slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouSel;