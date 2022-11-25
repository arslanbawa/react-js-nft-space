import React from "react";
import upload from "../assets/images/upload.svg";
import publish from "../assets/images/publish.svg";
import market from "../assets/images/market.svg";

function Footer() {
  return (
    <div className="footerContainer">
      <h1>Create & Sell NFT</h1>
      <div className="row">
        <div className="col-3">
          <div className="contentWrapper">
            <div className="imageWrapper">
              <img src={upload} alt="connect" />
            </div>

            <h2>Connect Wallet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              molestie, tortor consectetur bibendum.
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className="contentWrapper">
            <div className="imageWrapper">
              <img src={upload} alt="upload" />
            </div>

            <h2>Upload Art</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              molestie, tortor consectetur bibendum.
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className="contentWrapper">
            <div className="imageWrapper">
              <img src={publish} alt="publish" />
            </div>

            <h2>Publish Art</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              molestie, tortor consectetur bibendum.
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className="contentWrapper">
            <div className="imageWrapper">
              <img src={market} alt="market" />
            </div>

            <h2>Market Place</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              molestie, tortor consectetur bibendum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
