import React, { ReactElement } from "react";
import { Row, Col } from "antd";

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
        </Col>
      </Row>
    </div>
  );
}

export default App;
