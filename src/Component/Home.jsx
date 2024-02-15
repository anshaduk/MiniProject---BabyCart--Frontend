import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../assets/pic1.jpg";
import Navbar from "./Navbar";

function Home() {
  const carouselItems = [
    {
      imageSrc:
        "https://images.ctfassets.net/66mrrren2unf/4I0zuSafXlGuE7ed4AWt9V/6230a2720e1ddd37638963f92740e1d0/website__12_.jpg?q=40",
    },
    {
      imageSrc:
        "https://www.johnsonsbaby.in/sites/jbaby_in/files/slide-images/website-banner-with-cta_1.jpg",
    },
    {
      imageSrc:
        "http://mamaearth.in/blog/wp-content/uploads/2023/05/Desktop_APPOFFER.gif",
    },
  ];

  return (
    <div>
      <Navbar />

      <div style={{ height: "28rem" }}>
        <Carousel data-bs-theme="dark">
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <img className="d-block" src={item.imageSrc} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
