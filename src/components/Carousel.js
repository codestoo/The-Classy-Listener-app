import Carousel from "react-bootstrap/Carousel";

function CarouselFade() {
  return (
    <Carousel variant="dark">
      <Carousel.Item style={{ textAlign: "center" }}>
        <img
          src="./images/IMG_7592.jpg"
          alt="First slide"
          style={{ width: "550px", height: "400px" }}
        />
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ textAlign: "center" }}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
          src="./images/IMG_7489.jpg"
          alt="First slide"
          style={{ width: "550px", height: "400px" }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ textAlign: "center" }}>
        <img
          src="./images/IMG_7485.jpg"
          alt="First slide"
          style={{ width: "550px", height: "400px" }}
        />

        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
