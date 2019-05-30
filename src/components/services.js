import React from "react"
import "mdbreact/dist/css/mdb.css"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
} from "mdbreact"
import MINESMALL from "../images/mining.jpg"
import MINESMALLB from "../images/mining2.jpg"
const Services = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5" style={{ backgroundColor: "#BF2807" }}>
      <MDBCardBody style={{ backgroundColor: "#BF2807" }}>
        <MDBRow>
          <MDBCol lg="7">
            <h2
              className="font-weight-bold mb-3 p-0"
              style={{ color: "orange" }}
            >
              <strong>Our Mission:</strong>
            </h2>
            <h3 style={{ color: "lightgrey", padding: "10px" }}>
              To be an ideal partner of choice to our clients and customers and
              provide irreplaceable services that add significant value to their
              projects
            </h3>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src={MINESMALL} alt="" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <MDBRow fluid style={{ backgroundColor: "orange", paddingTop: "40px" }}>
          <MDBCol lg="7">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src={MINESMALLB} alt="" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>

          <MDBCol lg="5">
            <h2
              className="font-weight-bold mb-3 p-0"
              style={{ color: "black" }}
            >
              <strong>Our Services:</strong>
            </h2>
            <ul>
              <li>Mineral Exploration Services Mine and Laboratory services</li>
              <li>Mine and Laboratory services</li>
              <li>Mining</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  )
}

export default Services
