import React from "react";
import { headers } from "next/headers";

import LoginPageWrapper from "../../components/PageWrappers/LoginPageWrapper";

import { userService } from "../../services";
import { parseCookies } from "../../utils";

//******************************************************************************
// SERVER SIDE PROPS
//******************************************************************************

const checkLoginStatus = async () => {
  let currentUserSS = null;
  let { access_token } = parseCookies(headers().get("cookie"));

  const options = {
    headers: { Cookie: headers().get("cookie") },
    serverSide: true,
  };

  if (access_token) {
    try {
      console.log("In login page!")
      currentUserSS = await userService.getCurrent(options);
    } catch (error) {
      console.log(error);
    }
  }

  if (currentUserSS) {
    return { props: {}, redirect: { destination: "/" } };
  }

  return {
    props: {},
  };
};

//******************************************************************************
// MAIN COMPONENT
//******************************************************************************

const LandingPage = async (props) => {
  //------------------------------------------
  // JSX
  //------------------------------------------

  await checkLoginStatus();

  return (
    <>
      <LoginPageWrapper />
    </>
  );
};

export default LandingPage;
