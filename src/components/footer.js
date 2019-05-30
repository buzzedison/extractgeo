import React from "react"
import "mdbreact/dist/css/mdb.css"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import List from "../components/list"

const Footer = () => {
  return (
    <MDBFooter
      className="font-small pt-4 mt-4"
      style={{ backgroundColor: "#2C2B2B" }}
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" style={{ color: "#C7C6C6", fontSize: "12px" }}>
            <h6
              className="title"
              style={{
                paddingLeft: "40px",
                color: "orange",
              }}
            >
              <strong>OUR SERVICES</strong>
            </h6>

            <List />
          </MDBCol>
          <MDBCol md="6">
            <h6 className="title" style={{ color: "orange" }}>
              GET IN TOUCH
            </h6>
            <div style={{ color: "#C7C6C6", fontSize: "12px" }}>
              <p> East Legon, Accra, Ghana</p>
              <p> Email: info@extractgeoservices.com</p>
              <p> Call: 0245600275 </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.bloopglobal.com"> BLOOP </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
