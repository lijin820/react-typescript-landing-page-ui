import React, { ReactElement } from "react";
import { Row, Col } from "antd";

import appstore from "./assets/images/appstore_icon.png";
import playstore from "./assets/images/playstore_icon.png";

import "./styles/App.scss";

function App(): ReactElement {
  return (
    <div className="landing">
      <Row className="home-section">
        <Col md={{ span: 10, offset: 2 }}>
          <div>
            <span className="big-title">Quadpay anywhere</span>
          </div>
          <div>
            <span className="description">
              Shop your favorite brands with the Quadpay app—online or in-store.
            </span>
          </div>
          <div className="button-wrapper">
            <div className="store-button">
              <img src={appstore} alt="appstore" className="appstore-icon" />
              <span className="store-text">Get on the App Store</span>
            </div>
            <div className="store-button">
              <img src={playstore} alt="playstore" className="appstore-icon" />
              <span className="store-text">Get on Google Play</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
