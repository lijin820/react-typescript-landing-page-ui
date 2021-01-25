import React, { ReactElement } from "react";
import { Row, Col } from "antd";

import appstore from "./assets/images/appstore_icon.png";
import playstore from "./assets/images/playstore_icon.png";
import feature1 from "./assets/images/feature_icon_1.png";
import feature2 from "./assets/images/feature_icon_2.png";
import feature3 from "./assets/images/feature_icon_3.png";
import feature4 from "./assets/images/feature_icon_4.png";
import feature5 from "./assets/images/feature_icon_5.png";
import feature6 from "./assets/images/feature_icon_6.png";

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
      <Row className="content-section">
        <Col md={{ span: 20, offset: 2 }}>
          <Row>
            <Col>
              <span className="secondary-text">Partnering with Quadpay</span>
            </Col>
          </Row>
          <Row style={{ marginTop: 70 }}>
            <Col md={{ span: 8 }} className="feature-card">
              <img src={feature1} alt="feature-icon" className="feature-icon" />
              <div className="feature-title">
                <span>Make payment seamless</span>
              </div>
              <div className="feature-description">
                <span>
                  Online or in-store, Quadpay means more flexibility at
                  checkout.
                </span>
              </div>
            </Col>
            <Col md={{ span: 8 }} className="feature-card">
              <img src={feature2} alt="feature-icon" className="feature-icon" />
              <div className="feature-title">
                <span>Take on zero risk</span>
              </div>
              <div className="feature-description">
                <span>You get paid today. Your customers pay over time.</span>
              </div>
            </Col>
            <Col md={{ span: 8 }} className="feature-card">
              <img src={feature3} alt="feature-icon" className="feature-icon" />
              <div className="feature-title">
                <span>Put your customers first</span>
              </div>
              <div className="feature-description">
                <span>
                  Interest-free installment plans with no hard credit check or
                  impact on credit.
                </span>
              </div>
            </Col>
            <Col md={{ span: 8 }} className="feature-card">
              <img src={feature4} alt="feature-icon" className="feature-icon" />
              <div className="feature-title">
                <span>Accept all major cards</span>
              </div>
              <div className="feature-description">
                <span>
                  QuadPay is the only Buy Now, Pay Later solution that accepts
                  Amex and Discover along with Visa.
                </span>
              </div>
            </Col>
            <Col md={{ span: 8 }} className="feature-card">
              <img src={feature5} alt="feature-icon" className="feature-icon" />
              <div className="feature-title">
                <span>Tap into our community</span>
              </div>
              <div className="feature-description">
                <span>
                  Introduce your brand to millions of existing QuadPay customers
                  in our marketplace.
                </span>
              </div>
            </Col>
            <Col md={{ span: 8 }} className="feature-card">
              <img src={feature6} alt="feature-icon" className="feature-icon" />
              <div className="feature-title">
                <span>Track progress</span>
              </div>
              <div className="feature-description">
                <span>
                  Easily manage customer data, order management, and
                  reconciliation in the merchant portal.
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
