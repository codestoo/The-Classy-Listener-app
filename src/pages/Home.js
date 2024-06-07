import React from "react";
import CarouselFade from "../components/Carousel";

function Home() {
  return (
    <div>
      <h1 style = {{color: 'orange'}}> Welcome to the Classy Listener; a Music App to Help You Easily Find the
        Music You Love.
      </h1>
      <CarouselFade />
    </div>
  );
}

export default Home;
