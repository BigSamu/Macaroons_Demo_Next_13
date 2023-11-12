"use client";

import React, { useState, useEffect } from "react";

import { Row, Col, Button, Alert, Image } from "react-bootstrap";

import { settingCookiesFromSharedMacaroon } from "../../app/actions";
import { parseMacaroonToken } from "../../utils";

import _ from "lodash";

const LandingPageWrapper = (props) => {
  //-----------------------------------
  // HOOKS & VARIABLES
  //-----------------------------------

  // States
  const {currentUserSS, accessTokenSS } = props;
  const [currentUser, setCurrentUser] = useState(currentUserSS);
  const [accessToken, setAccessToken] = useState(accessTokenSS);

  const [openModal, setOpenModal] = useState({
    shareLink: false,
  });


  // Effects
  useEffect(() => {
    if(accessToken?.isShared){
      settingCookiesFromSharedMacaroon(accessToken?.value);
    }
  }, []);

  //------------------------------------------
  // HANDLERS & AUX FUNCTIONS
  //------------------------------------------

  const handleOnClickOpenShareLinkModal = (e) => {
    setOpenModal({ ...openModal, shareLink: true });
  };

  //------------------------------------------
  // JSX
  //------------------------------------------

  return (
    <div>
      <Row className="align-items-strech justify-content-start">
        <Col sm={12} md={6}>
          <Alert variant="warning" className="py-2">
            <h5 className="fw-bold mb-0">
              {`What is a Macaroon?`}
            </h5>
          </Alert>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nobis impedit quo blanditiis facilis, voluptate officia! Veniam eius dolore ipsum suscipit esse, vel distinctio at ut voluptates deserunt alias odio corporis excepturi? Optio, odit excepturi minus corrupti earum facere quas reiciendis aliquid explicabo libero quisquam eius placeat numquam nam maiores?
          </p>

          <hr />

          <Image
              size={"auto"}
              src={"/assets/macaroon_attributes.png"}
              thumbnail
            />
        </Col>
        <Col sm={12} md={6} className="mt-3 mt-xl-0">

        </Col>
      </Row>

      <Button
        variant="primary"
        type="button"
        className="mx-0 my-1"
        onClick={handleOnClickOpenShareLinkModal}
      >
        Share Resources
      </Button>

    </div>
  );
};

export default LandingPageWrapper;
