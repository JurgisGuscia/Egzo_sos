import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "./sponsors.scss";
import SponsorLogo from "../sponsorLogo/SponsorLogo";
export default function Sponsors() {
  return (
    <div className="sponsorsContainer">
      <div className="sponsorInnerWrapper">
        <h4>Mūsų Rėmėjai</h4>
        <h3>Kviečiame organizacijas remti mažuosius prieglaudinukus!</h3>
        <div className="sponsorCarouselOuterContainer">
          <Carousel
            controls={false}
            indicators={true}
            interval={1500}
            id="bigCarousel"
          >
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo
                  name="euroCrickets"
                  path="eurocrickets.com/home/"
                />
                <SponsorLogo
                  name="dragonHouse"
                  path="www.facebook.com/dragonhouseLT/"
                />
                <SponsorLogo name="staktosVoras" path="staktosvoras.lt/" />
                <SponsorLogo name="maistoBankas" path="www.maistobankas.lt/" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo name="millaMore" path="millamore.com/lt/" />
                <SponsorLogo name="kika" path="www.kika.lt/" />
                <SponsorLogo name="hipika" path="hipika.lt/" />
                <SponsorLogo
                  name="siuvinejimasSiuvimasDM"
                  path="www.facebook.com/profile.php?id=100063611890387"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo
                  name="finamena"
                  path="rekvizitai.vz.lt/imone/finamena/"
                />
                <SponsorLogo name="petCity" path="www.petcity.lt/" />
                <SponsorLogo name="saltakraujis" path="saltakraujis.lt/" />
              </div>
            </Carousel.Item>
          </Carousel>

          <Carousel
            controls={false}
            indicators={true}
            interval={1500}
            id="smallCarousel"
          >
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo
                  name="euroCrickets"
                  path="eurocrickets.com/home/"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo
                  name="dragonHouse"
                  path="www.facebook.com/dragonhouseLT/"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo name="staktosVoras" path="staktosvoras.lt/" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo name="maistoBankas" path="www.maistobankas.lt/" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo name="millaMore" path="millamore.com/lt/" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo name="kika" path="www.kika.lt/" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo name="hipika" path="hipika.lt/" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo
                  name="siuvinejimasSiuvimasDM"
                  path="www.facebook.com/profile.php?id=100063611890387"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo
                  name="finamena"
                  path="rekvizitai.vz.lt/imone/finamena/"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo name="petCity" path="www.petcity.lt/" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselSlideContainer">
                <SponsorLogo name="saltakraujis" path="saltakraujis.lt/" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
