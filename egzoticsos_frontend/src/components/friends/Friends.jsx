import React from "react";
import "./friends.scss";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import FriendLink from "../friendLink/FriendLink";
export default function Friends() {
  return (
    <div className="friendsContainer">
      <div className="friendsInnerWrapper">
        <h3>Mūsų Draugai</h3>
        <h2>Organizacijos, renkančios aukas mūsų gyvūnėliams.</h2>
        <div className="friendsCarouselContainer">
          <Carousel
            controls={false}
            indicators={true}
            interval={1500}
            id="bigFriendsCarousel"
          >
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.zoopark.lt"}
                  name={"Zoopark"}
                  pic={"zoopark.png"}
                />
                <FriendLink
                  link={"www.salisalisa.lt"}
                  name={"Alisa"}
                  pic={"alisa.png"}
                />
                <FriendLink
                  link={"www.veterinarijosklinikakaune.lt"}
                  name={"Gyvunų edenas"}
                  pic={"gyvunuEdenas.png"}
                />
                <FriendLink
                  link={"www.hipika.lt"}
                  name={"Hipika"}
                  pic={"hipika.png"}
                />
                <FriendLink
                  link={"www.google.lt/search?q=deidonas"}
                  name={"Deidonas"}
                  pic={"deidonas.png"}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.pasfila.lt"}
                  name={"Pas Filą"}
                  pic={"pasFila.png"}
                />
                <FriendLink
                  link={"www.gyvunuklinika.eu"}
                  name={"VT klinika"}
                  pic={"vtKlinika.png"}
                />
                <FriendLink
                  link={"www.facebook.com/profile.php?id=100063774001446"}
                  name={"Juodai skanu"}
                  pic={"juodaiSkanu.png"}
                />
                <FriendLink
                  link={"www.facebook.com/profile.php?id=100071943462595"}
                  name={"Vilkijos gėlių parduotuvė"}
                  pic={"vilkijosGeliuParduotuve.png"}
                />
                <FriendLink
                  link={"www.google.lt/search?q=ziupsnio+individuali+imone"}
                  name={"Žiupsnio individuali įmonė"}
                  pic={"ziupsnio.png"}
                />
              </div>
            </Carousel.Item>
          </Carousel>

          <Carousel
            controls={false}
            indicators={true}
            interval={1500}
            id="smallFriendsCarousel"
          >
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.zoopark.lt"}
                  name={"Zoopark"}
                  pic={"zoopark.png"}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.salisalisa.lt"}
                  name={"Alisa"}
                  pic={"alisa.png"}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.veterinarijosklinikakaune.lt"}
                  name={"Gyvunų edenas"}
                  pic={"gyvunuEdenas.png"}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.hipika.lt"}
                  name={"Hipika"}
                  pic={"hipika.png"}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.google.lt/search?q=deidonas"}
                  name={"Deidonas"}
                  pic={"deidonas.png"}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.pasfila.lt"}
                  name={"Pas Filą"}
                  pic={"pasFila.png"}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.gyvunuklinika.eu"}
                  name={"VT klinika"}
                  pic={"vtKlinika.png"}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.facebook.com/profile.php?id=100063774001446"}
                  name={"Juodai skanu"}
                  pic={"juodaiSkanu.png"}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.facebook.com/profile.php?id=100071943462595"}
                  name={"Vilkijos gėlių parduotuvė"}
                  pic={"vilkijosGeliuParduotuve.png"}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="friendsCarouselSlideContainer">
                <FriendLink
                  link={"www.google.lt/search?q=ziupsnio+individuali+imone"}
                  name={"Žiupsnio individuali įmonė"}
                  pic={"ziupsnio.png"}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
