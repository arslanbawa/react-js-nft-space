import React from "react";
import bannerImg from "../assets/images/banner-img.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Banner() {
  return (
    <div className="bannerContainer">
      <div className="row">
        <div className="col-lg-6 ">
          <div className="bannerContent">
            <h1>
              Discover, <span className="lineBreake">Collect, and sell</span>{" "}
              extraodinary <span className="coloredText">NFTS</span>{" "}
            </h1>
            <p>
              Get started with the worlds easiest and most secure platform for{" "}
              <span className="lineBreake">
                selling, purchacing, and collecting non-fungible token.
              </span>{" "}
            </p>
            <div className="bannerLinksWrapper">
              <button>Explore Art</button>{" "}
              <div className="bannerLinks">
                <a href="default">Learn More</a>
                <a href="default" className="rightArrow">
                  <ArrowForwardIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ">
          <div className="bannerImg">
            <img src={bannerImg} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
