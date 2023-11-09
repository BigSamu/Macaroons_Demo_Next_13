import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

import { useAuthContext } from "../contexts/AuthContext";

//******************************************************************************
// MAIN COMPONENT
//******************************************************************************

const Header = (props) => {
  //-----------------------------------
  // HOOKS & VARIABLES
  // ----------------------------------

  // Props
  const { user, logout } = useAuthContext();

  // Routers
  const pathname = usePathname();

  // Aux Variables
  const inLoginPath = pathname === "/login" ? true : false;
  const inSharedHomePath =
    pathname === "/share/[macaroon]" ? true : false;
  const inHomePath = pathname === "/" ? true : false;

  //------------------------------------------
  // HANDLERS & AUX FUNCTIONS
  //------------------------------------------

  const handleOnClickLogout = (e) => {
    logout();
  };

  //------------------------------------------
  // JSX
  //------------------------------------------

  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <img
                alt=""
                src={"/assets/macaroon_logo.png"}
                width={32}
                height={32}
              />
              <p className="d-inline-block my-0 mx-2 align-middle">
                Macaroon Demo
              </p>
            </Navbar.Brand>
          </Link>
          <Nav className="ms-auto">
            {inHomePath && (
              <Nav.Link active onClick={handleOnClickLogout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
